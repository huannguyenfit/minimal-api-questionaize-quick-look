import { Badge, Breadcrumb, Button, Col, Form, Input, Row, Select, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import { RouteChildrenProps } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import assessmentService from '@core/services/assessment.service';
import AssessmentCreateComponent from '../assessment-create/assessment-create';

interface Props extends RouteChildrenProps {}

export default function AssesmentsListComponent(props: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [assessments, setAssessments] = useState([]);
  const [skipPage, setSkipPage] = useState(0);
  const [total, setTotal] = useState(0);
  const $destroy = new Subject();
  const { t } = useTranslation();
  const pageSize = 50;
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
                <a className='font-weight-bold' onClick={() => viewDetails(record.id)}>
                  {t('common.details')}
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

  const viewDetails = (id: number) => {
    return;
  };
  const refreshGridView = () => {
    getAssessments(skipPage, pageSize);
  };
  return (
    <>
      <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item>{t('Home')}</Breadcrumb.Item>
        <Breadcrumb.Item>{t('Assessments')}</Breadcrumb.Item>
      </Breadcrumb>
      <div className='candidate-list page-content employee'>
        <div className='list-header'>
          <Row>
            <Col span={12}>
              <h1 className='page-title'>{t('Assessments')}</h1>
            </Col>
            <Col span={12}>
              <AssessmentCreateComponent refreshGridView={refreshGridView} />
            </Col>
          </Row>
        </div>
        <Table
          columns={columns}
          dataSource={assessments}
          onChange={onGridChange}
          style={{ height: '400px' }}
          scroll={{ y: 400 }}
          rowKey='Id'
          pagination={{ current: currentPage, showSizeChanger: false, pageSize: pageSize, total: total }}
        />
      </div>
    </>
  );
}
