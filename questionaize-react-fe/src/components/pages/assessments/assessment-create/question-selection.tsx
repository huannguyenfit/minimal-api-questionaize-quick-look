import { Badge, Breadcrumb, Button, Col, Form, Input, Modal, Row, Select, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TypeInputEnum } from '@core/utils/enums';
import questionsService from '@core/services/questions.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestionAction } from '@core/+state/actions/question-action';
// import { AppState } from '@core/+state/store';

export default function QuestionsSelectionComponent(props: any) {
  const { currentQuestionSelected } = props;
  const [currentPage, setCurrentPage] = useState(1);
  // const [questions, setQuestions] = useState([]);
  const { questions } = useSelector((state: any) => state.questions);
  const [questionSelected, setQuestionSelected] = useState<any>([]);
  const dispatch = useDispatch();
  const [skipPage, setSkipPage] = useState(0);
  const [visible, setVisible] = useState(false);
  const [total, setTotal] = useState(0);
  const $destroy = new Subject();
  const { t } = useTranslation();
  const pageSize = 50;
  useEffect(() => {
    getQuestions(skipPage, pageSize);
    return () => {
      $destroy.next(true);
      $destroy.complete();
    };
  }, []);
  useEffect(() => {
    if (currentQuestionSelected) {
      setQuestionSelected(currentQuestionSelected);
    }
  }, [currentQuestionSelected]);

  const getQuestions = async (skip: number, take: number) => {
    dispatch(getQuestionAction(skip, take));
    // questionsService
    //   .getAll(skip, take)
    //   .pipe(takeUntil($destroy))
    //   .subscribe((res: any) => {
    //     setQuestions(res.data.results);
    //     setTotal(res.data.total);
    //     console.log(res.data);
    //   });
  };
  const onClose = () => {
    setVisible(false);
    resetForm();
  };
  const resetForm = () => {
    // setQuestions([]);
    // setQuestionSelected([]);
  };
  const submit = () => {
    props.onQuestionResponse(questionSelected);
    setVisible(false);
    resetForm();
  };

  const columns = [
    {
      title: t('questions.lblTitle'),
      dataIndex: 'Title',
      width: '20%',
      sorter: true,
      render: (Title: string) => {
        return <span>{Title}</span>;
      },
    },
    {
      title: t('questions.lblTypeInput'),
      dataIndex: 'TypeInputId',
      width: '15%',
      render: (TypeInputId: TypeInputEnum) => {
        return (
          <span>
            {TypeInputId == TypeInputEnum.SingleSelection ? t('questions.singleSelection') : t('questions.multipleSelection')}
          </span>
        );
      },
    },
    {
      title: t('questions.action'),
      key: 'action',
      width: '15%',
      render: (_: any, record: any) => {
        return (
          <>
            {
              <Space size='middle'>
                {questionSelected.some((question: any) => question.Id == record.Id) ? (
                  <a onClick={() => deselectQuestion(record.Id)} style={{ color: 'gray' }}>
                    {t('Deselect')}
                  </a>
                ) : (
                  <a onClick={() => selectQuestion(record)} className='advance-search-button'>
                    {t('Select Question')}
                  </a>
                )}
              </Space>
            }
          </>
        );
      },
    },
  ];

  const onGridChange = async (_pagination: any, _filters: any, sorter: any) => {
    const nextPage = (_pagination.current - 1) * pageSize;
    setSkipPage(nextPage);
    getQuestions(nextPage, pageSize);
    setCurrentPage(_pagination.current);
  };
  const showPopup = () => {
    setVisible(true);
  };
  const selectQuestion = (question: any) => {
    if (!questionSelected.some((q: any) => q.Id == question.Id)) {
      questionSelected.push(question);
      setQuestionSelected([...questionSelected]);
    }
  };
  const deselectQuestion = (questionId: any) => {
    const questions = questionSelected.filter((question: any) => question.Id != questionId);
    setQuestionSelected([...questions]);
  };

  const refreshGridView = () => {
    getQuestions(skipPage, pageSize);
  };
  return (
    <>
      <a onClick={showPopup} className='advance-search-button'>
        {' '}
        {t('Select Question')}
      </a>
      <Modal
        zIndex={1001}
        title={t('Select Question')}
        visible={visible}
        onCancel={onClose}
        width={768}
        centered={true}
        className='assessment-create'
        footer={
          <div className='d-flex justify-between align-center'>
            <Button className='btn-cancel' onClick={onClose} style={{ marginRight: 8 }}>
              {t('common.cancel')}
            </Button>
            <Button type='primary' onClick={submit}>
              {t('common.saveChanges')}
            </Button>
          </div>
        }
      >
        <Row gutter={24}>
          <Col span={24}>
            <Table
              columns={columns}
              dataSource={questions.results}
              onChange={onGridChange}
              style={{ height: '400px' }}
              scroll={{ y: 400 }}
              rowKey='Id'
              pagination={{ current: currentPage, showSizeChanger: false, pageSize: pageSize, total: questions.total }}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
}
