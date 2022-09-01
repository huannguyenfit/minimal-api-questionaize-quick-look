import { Badge, Breadcrumb, Button, Col, Form, Input, Modal, Row, Select, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import { RouteChildrenProps, useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import assessmentService from '@core/services/assessment.service';
import { EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import myTestingService from '@core/services/my-testing.service';
import { ROUTE_PATHS } from '@core/constants/url-config';
const { confirm } = Modal;

export default function SelectAssessmentComponent(props: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const [assessments, setAssessments] = useState([]);
  const [skipPage, setSkipPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [visible, setVisible] = useState(false);
  const $destroy = new Subject();
  const { t } = useTranslation();
  const pageSize = 50;
  const history = useHistory();

  useEffect(() => {
    getAssessments(skipPage, pageSize);
    return () => {
      $destroy.next(true);
      $destroy.complete();
    };
  }, []);

  const getAssessments = async (skip: number, take: number) => {
    assessmentService
      .getAll(skip, take)
      .pipe(takeUntil($destroy))
      .subscribe((res: any) => {
        setAssessments(res.data.results);
        setTotal(res.data.total);
      });
  };

  const selectATest = (assessmentId: number) => {
    confirm({
      title: `Do you want to start the test?`,
      icon: <ExclamationCircleOutlined />,
      content: '',
      onOk() {
        //redirect
        myTestingService
          .readyToTest(assessmentId)
          .pipe(takeUntil($destroy))
          .subscribe((res: any) => {
            history.push(`${ROUTE_PATHS.DoATest}/${res.data.id}`);
          });
      },
      onCancel() {},
    });
  };

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
    {
      title: t('assessments.lblDescription'),
      dataIndex: 'Description',
      width: '50%',
      render: (Description: string) => {
        return <span>{Description}</span>;
      },
    },
    {
      title: t('common.action'),
      key: 'action',
      width: '15%',
      render: (_: any, record: any) => {
        return (
          <>
            {
              <Space size='middle'>
                <a className='font-weight-bold' onClick={() => selectATest(record.Id)}>
                  {t('common.select')}
                </a>
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
    getAssessments(nextPage, pageSize);
    setCurrentPage(_pagination.current);
  };

  const onClose = () => {
    setVisible(false);
  };

  const submit = () => {};
  const showModal = () => {
    setVisible(true);
  };
  const refreshGridView = () => {
    getAssessments(skipPage, pageSize);
  };
  return (
    <>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
        <Button type='primary' className='add-new' onClick={showModal}>
          <EditOutlined />
          {'Make a Test'}
        </Button>
      </div>
      <Modal
        title={`${t(`Select Assessment for Testing`)}`}
        visible={visible}
        onCancel={onClose}
        centered={true}
        width={'700px'}
        className='assessment-create'
        zIndex={1000}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <Row gutter={24}>
          <Col span={24}>
            <Table
              columns={columns}
              dataSource={assessments}
              onChange={onGridChange}
              rowKey='Id'
              pagination={{ current: currentPage, showSizeChanger: false, pageSize: pageSize, total: total }}
            />
          </Col>
        </Row>
      </Modal>
    </>
  );
}
