import { Badge, Button, Checkbox, Col, Drawer, Form, Input, InputNumber, Row, Select, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import questionsService from '../../../../@core/services/questions.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PlusOutlined } from '@ant-design/icons';
import { TYPE_INPUTS } from '../../../../@core/constants/common';
import { AddIcon, ClearIcon } from '../../../../@core/shared/icon';
import './question-create.scss';
const { Option } = Select;

export default function QuestionsCreateComponent(props: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [questions, setQuestions] = useState([]);
  const [visible, setVisible] = useState(false);
  const [createForm] = Form.useForm();

  const $destroy = new Subject();
  const { t } = useTranslation();

  useEffect(() => {
    createForm.setFieldsValue(initData(currentQuestion));
  }, [currentQuestion]);

  const initData = (question: any) => {
    const { Value } = question;
    //default has two option
    question.Values = Value ? JSON.parse(Value) : [{ KeyId: 1 }, { KeyId: 2 }];
    return question;
  };
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const submit = () => {
    createForm.validateFields().then(async (value: any) => {
      let payload = createForm.getFieldsValue();
      payload.Anwser = payload.Values.filter((question: any) => question.IsCorrect == true)
        .map((question: any) => question.KeyId)
        .join(',');

      payload.Values = payload.Values.map((question: any) => {
        delete question.IsCorrect;
        return question;
      });
      payload.Value = JSON.stringify(payload.Values);
      delete payload.Values;

      questionsService
        .add(payload)
        .pipe(takeUntil($destroy))
        .subscribe((res: any) => {
          resetFrom();
          props.refreshGridView();
          setVisible(false);
        });
    });
  };

  const addNewOption = () => {
    let values = createForm.getFieldValue('Values') as any[];
    values.push({ KeyId: values.length + 1 });
    createForm.setFieldsValue({ Values: values });
  };

  const resetFrom = () => {
    createForm.resetFields();
    createForm.setFieldsValue(initData(currentQuestion));
  };

  const renderQuestionOption = () => {
    return (
      <>
        <div className='form-content'>
          <div className='form-section'>
            <div className='section-header'>
              <p className='section-title' style={{ display: 'flex', marginBottom: '0', alignItems: 'center' }}>
                <b>{t('Options')}</b>
                <Button className='btn-clear' type='text' onClick={() => addNewOption()}>
                  <AddIcon />
                </Button>
              </p>
              <div className='section-wrapper'>
                <Form.List name='Values'>
                  {(fields, { add, remove }, { errors }) => (
                    <>
                      <div className='form-list'>
                        {fields.map((field, index) => (
                          <Form.Item key={index} label={t('Option') + ' #' + (index + 1)}>
                            <Form.Item {...field} name={[field.name, 'Id']} hidden></Form.Item>

                            <Row gutter={20}>
                              <Col span={4}>
                                <Form.Item
                                  {...field}
                                  name={[field.name, 'KeyId']}
                                  rules={[{ required: true, message: 'KeyId is required!' }]}
                                >
                                  <InputNumber readOnly={true} min={1} placeholder={t('questions.lblKeyId')} />
                                </Form.Item>
                              </Col>

                              <Col span={12}>
                                <Form.Item
                                  {...field}
                                  name={[field.name, 'DisplayName']}
                                  rules={[
                                    {
                                      required: true,
                                      message: 'Display Name is required!',
                                    },
                                  ]}
                                >
                                  <Input placeholder={t('questions.lblDisplayName')} />
                                </Form.Item>
                              </Col>
                              <Col span={4}>
                                <Form.Item {...field} name={[field.name, 'IsCorrect']} valuePropName='checked'>
                                  <Checkbox>{t('questions.IsCorrect')}</Checkbox>
                                </Form.Item>
                              </Col>
                              <span className='form-list-action align-bottom'>
                                {index > 1 && (
                                  <Button
                                    type='text'
                                    className='btn-clear'
                                    onClick={() => {
                                      remove(field.name);
                                    }}
                                  >
                                    <ClearIcon />
                                  </Button>
                                )}
                              </span>
                            </Row>
                          </Form.Item>
                        ))}
                      </div>
                    </>
                  )}
                </Form.List>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Button type='primary' className='add-new' onClick={showDrawer}>
        <PlusOutlined />
        {'Add New'}
      </Button>

      <Drawer
        title={t('common.addNew')}
        width={768}
        onClose={onClose}
        visible={visible}
        className='question-create'
        bodyStyle={{ paddingBottom: 80 }}
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
        <Form layout='vertical' form={createForm} hideRequiredMark>
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item name='Title' label={t('questions.lblTitle')} rules={[{ required: true, message: 'Title is required!' }]}>
                <Input placeholder={t('questions.lblTitle')} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                name='SubTitle'
                label={t('questions.lblSubTitle')}
               
              >
                <Input placeholder={t('questions.lblSubTitle')} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name='TypeInputId'
                label={t('questions.lblTypeInput')}
                rules={[{ required: true, message: 'Type Input is required!' }]}
              >
                <Select placeholder={t('questions.lblTypeInput')}>
                  {TYPE_INPUTS.map((item, index) => (
                    <Option key={index} value={item.value}>
                      {item.display}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>{renderQuestionOption()}</Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
}
