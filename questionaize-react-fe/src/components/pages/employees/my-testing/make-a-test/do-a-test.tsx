import { Breadcrumb, Button, Checkbox, Col, Form, Input, Radio, Row, Select, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import { RouteChildrenProps, useHistory, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import myTestingService from '@core/services/my-testing.service';
import './do-a-test.scss';
import { TypeInputEnum } from '@core/utils/enums';
import classNames from 'classnames';
import { toggleMessage } from '@core/utils/loading/loading';
import { ROUTE_PATHS } from '@core/constants/url-config';
export default function DoATestComponent(props: any) {
  const [assessment, setAssessments] = useState<any>({});
  const [question, setQuestion] = useState<any>({});
  const [questionAnwers, setQuestionAnwsers] = useState<any>([]);
  const [currentQuestion, setCurrentQuestion] = useState<any>(false);
  const [byPass, setByPass] = useState<any>(false);
  const [showScore, setShowScore] = useState<any>(false);
  const [score, setScore] = useState<any>(0);
  const { testId } = props.match?.params;
  const $destroy = new Subject();
  const history = useHistory();

  const { t } = useTranslation();

  const pageSize = 50;
  useEffect(() => {
    getTest();
    return () => {
      $destroy.next(true);
      $destroy.complete();
    };
  }, []);

  const getTest = async () => {
    myTestingService
      .getTest(testId)
      .pipe(takeUntil($destroy))
      .subscribe((res: any) => {
        if (res.data.result) {
          toggleMessage({
            message: 'Your assessment has been finished',
            type: 'info',
          });
          history.push(`${ROUTE_PATHS.MyTesting}`);
        }
        for (let question of res.data.questions) {
          question.values = JSON.parse(question.value);
        }
        setAssessments(res.data);
        init(res.data.questions);
      });
  };
  const init = (questions: any) => {
    setQuestion(questions[0]);
    setCurrentQuestion(0);
  };

  const onChooseAnswer = (keyId: number) => {
    if (question.typeInputId == TypeInputEnum.SingleSelection) {
      for (let option of question?.values) {
        option.Selected = false;
      }
    }
    let option = question.values.filter((q: any) => q.KeyId == keyId)[0];
    if (!option) return;
    setByPass(true);
    if (question.typeInputId == TypeInputEnum.SingleSelection) {
      option.Selected = true;
    } else if (question.typeInputId == TypeInputEnum.MultipleSelection) {
      option.Selected = !option.Selected;
    }
    setQuestion({ ...question });

    //update new select if exists tmp
    let questionPassed = questionAnwers.filter((o: any) => o.Id == question.id)[0];

    if (questionPassed) {
      questionPassed.YourAnwser = question.values
        ?.filter((option: any) => option.Selected == true)
        .map((option: any) => option.KeyId)
        ?.join(',');
    } else {
      //add new into array tmp

      let data = {
        Id: question.id,
        Title: question.title,
        SubTitle: question.subTitle,
        TypeInputId: question.typeInputId,
        Value: question.value,
        YourAnwser: question.values
          ?.filter((option: any) => option.Selected == true)
          .map((option: any) => option.KeyId)
          ?.join(','),
      };
      questionAnwers.push(data);
    }
    setQuestionAnwsers([...questionAnwers]);
    if (question.typeInputId == TypeInputEnum.SingleSelection) {
      setTimeout(() => {
        nextQuestion(true);
      }, 600);
    }
  };

  const nextQuestion = (byPass: any) => {
    if (!byPass) return;
    const nexts = assessment.questions;
    if (currentQuestion < nexts.length - 1) {
      let nextQuestion = nexts[currentQuestion + 1];
      setQuestion(nextQuestion);
      setCurrentQuestion(currentQuestion + 1);
      setByPass(false);
    }
  };
  const submit = () => {
    myTestingService
      .saveAssessment(testId, {
        Questions: questionAnwers
      })
      .pipe(takeUntil($destroy))
      .subscribe((response) => {
        if (response.data) {
          setScore(response.data);
          setShowScore(true);
        }
      });
  };
  const gotoMyTest = () => {
    history.push(`${ROUTE_PATHS.MyTesting}`);
  }
  return (
    <>
      <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item>{t('Home')}</Breadcrumb.Item>
        <Breadcrumb.Item>{t('Your Testing')}</Breadcrumb.Item>
      </Breadcrumb>
      <div className='page-content employee'>
        <div className='w-form'>
          <Row gutter={24} style={{ display: 'flex', justifyContent: 'center' }}>
            <Col span={10}>
              <div className='app'>
                {showScore ? (
                  <>
                    <div className='score-section' style={{ fontSize: '20px', marginTop: '54px' }}>
                      You scored {score} out of {assessment?.questions?.length}
                    </div>
                  </>
                ) : (
                  <>
                    <div className='question-section'>
                      <div className='question-count'>
                        <span>Question {currentQuestion + 1}</span>/{assessment?.questions?.length}
                      </div>
                      <div className='question-text'>
                        {question.title}
                        {question?.typeInputId == TypeInputEnum.SingleSelection && <small>Please choose an option</small>}
                        {question?.typeInputId == TypeInputEnum.MultipleSelection && <small>Please choose multiple option</small>}
                      </div>
                    </div>
                    <div className='answer-section'>
                      {(question?.typeInputId == TypeInputEnum.SingleSelection ||
                        question?.typeInputId == TypeInputEnum.MultipleSelection) &&
                        question &&
                        question.values &&
                        question.values.map((answerOption: any, index: number) => (
                          <button
                            key={index}
                            className={classNames('option animate__animated', {
                              'animate__flash selected-option': answerOption.Selected == true,
                            })}
                            onClick={() => onChooseAnswer(answerOption.KeyId)}
                          >
                            {answerOption.DisplayName}
                          </button>
                        ))}
                    </div>
                    {byPass &&
                      question?.typeInputId == TypeInputEnum.MultipleSelection &&
                      currentQuestion < assessment?.questions?.length - 1 && (
                        <Button type='primary' style={{ float: 'right' }} className='add-new' onClick={() => nextQuestion(true)}>
                          {'Next question'}
                        </Button>
                      )}

                    {byPass && currentQuestion == assessment?.questions?.length - 1 && (
                      <Button type='primary' style={{ float: 'right' }} className='add-new' onClick={submit}>
                        {'Submit'}
                      </Button>
                    )}
                  </>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
