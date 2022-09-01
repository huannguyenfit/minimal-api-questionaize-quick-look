import { Badge, Breadcrumb, Button, Col, Form, Input, InputNumber, Modal, Row, Select, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import { RouteChildrenProps } from 'react-router';
import { ROUTE_PATHS } from '@core/constants/url-config';
import { useTranslation } from 'react-i18next';
import { TypeInputEnum } from '@core/utils/enums';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PlusOutlined } from '@ant-design/icons';
import assessmentService from '@core/services/assessment.service';
import QuestionsSelectionComponent from './question-selection';

export default function AssessmentCreateComponent(props: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [addAssessmentAuto, setAddAssessmentAuto] = useState(false);
  const [skipPage, setSkipPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [visible, setVisible] = useState(false);
  const [createForm] = Form.useForm();
  const [questionSelected, setQuestionSelected] = useState<any>([]);

  const $destroy = new Subject();
  const { t } = useTranslation();
  const pageSize = 50;

  const showModalAddManual = () => {
    setVisible(true);
  };

  const showModalAddAuto = () => {
    setVisible(true);
    setAddAssessmentAuto(true);
  };

  const onClose = () => {
    setAddAssessmentAuto(false);
    setVisible(false);
  };

  const submit = () => {
    createForm.validateFields().then(async (value: any) => {
      let payload = createForm.getFieldsValue();

      if (addAssessmentAuto) {
        const numberOfQuestions = payload.numberOfQuestions;
        delete payload.numberOfQuestions;
        assessmentService
          .addAuto(numberOfQuestions, payload)
          .pipe(takeUntil($destroy))
          .subscribe((response) => {
            setVisible(false);
          resetForm();
            setAddAssessmentAuto(false);
            props.refreshGridView();
          });
        return;
      }

      //Create manual
      payload.Questions = questionSelected;
      assessmentService
        .add(payload)
        .pipe(takeUntil($destroy))
        .subscribe((response) => {
          setVisible(false);
          resetForm();
          props.refreshGridView();
        });
    });
  };
  const resetForm = () => {
    setAddAssessmentAuto(false);
    createForm.resetFields();
    setQuestionSelected([]);
  };
  // const getQuestions = async (skip: number, take: number) => {
  //   questionsService
  //     .getAll(skip, take)
  //     .pipe(takeUntil($destroy))
  //     .subscribe((res: any) => {
  //       setQuestions(res.data.results);
  //       setTotal(res.data.total);
  //       console.log(res.data);
  //     });
  // };

  const columns = [
    {
      title: t('assessments.lblTitle'),
      dataIndex: 'Title',
      width: '20%',
      sorter: true,
      render: (Title: string) => {
        return <span>{Title}</span>;
      },
    },
  ];

  // const onGridChange = async (_pagination: any, _filters: any, sorter: any) => {
  //   const nextPage = (_pagination.current - 1) * pageSize;
  //   setSkipPage(nextPage);
  //   getQuestions(nextPage, pageSize);
  //   setCurrentPage(_pagination.current);
  // };

  const onQuestionResponse = (data: any) => {
    setQuestionSelected(data);
  };
  return (
    <>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
        <Button type='primary' className='add-new' onClick={showModalAddManual}>
          <PlusOutlined />
          {'Add New'}
        </Button>
        <Button type='default' className='add-new' onClick={showModalAddAuto}>
          <PlusOutlined />
          {'Add Auto'}
        </Button>
      </div>
      <Modal
        title={`${t(`Create Assessment ${addAssessmentAuto ? 'Auto' : ''}`)}`}
        visible={visible}
        onCancel={onClose}
        centered={true}
        width={!addAssessmentAuto ? '600px' : undefined}
        className='assessment-create'
        zIndex={1000}
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
              <Form.Item
                name='Title'
                label={t('assessments.lblTitle')}
                rules={[{ required: true, message: 'Title is required!' }]}
              >
                <Input placeholder={t('assessments.lblTitle')} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item name='Description' label={t('assessments.lblDescription')}>
                <Input.TextArea rows={3} placeholder={t('assessments.lblDescription')} />
              </Form.Item>
            </Col>
          </Row>
          {addAssessmentAuto && (
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  name='numberOfQuestions'
                  label={t('assessments.lblNumberOfQuestion')}
                  rules={[{ required: true, message: 'Number Of Questions is required!' }]}
                >
                  <InputNumber min={1} placeholder={t('questions.lblNumberOfQuestion')} />
                </Form.Item>
              </Col>
            </Row>
          )}
          {!addAssessmentAuto && (
            <Row gutter={24}>
              <Col span={24}>
                <div className='list-header'>
                  <Row>
                    <Col span={12} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <p className='page-title'>{t('Questions')}</p>
                      <QuestionsSelectionComponent
                        currentQuestionSelected={questionSelected}
                        onQuestionResponse={onQuestionResponse}
                      />
                    </Col>
                    <Col span={12}></Col>
                  </Row>
                </div>

                <Table
                  columns={columns}
                  dataSource={questionSelected}
                  rowKey='Id'
                  style={{ height: '250px' }}
                  scroll={{ y: 250 }}
                  pagination={{
                    current: currentPage,
                    showSizeChanger: false,
                    pageSize: pageSize,
                    total: questionSelected.length,
                  }}
                />
              </Col>
            </Row>
          )}
        </Form>
      </Modal>
    </>
  );
}
