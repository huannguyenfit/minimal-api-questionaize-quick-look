import { Breadcrumb, Col, Form, Input, Row, Select, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import { RouteChildrenProps, useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import SelectAssessmentComponent from './select-assessment/select-assessment';
import myTestingService from '@core/services/my-testing.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ROUTE_PATHS } from '@core/constants/url-config';

interface Props extends RouteChildrenProps {}

export default function MyTestingListComponent(props: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [myTestings, setMyTesting] = useState([]);
  const [skipPage, setSkipPage] = useState(0);
  const [total, setTotal] = useState(0);
  const $destroy = new Subject();
  const history = useHistory();

  const { t } = useTranslation();

  const pageSize = 50;
  useEffect(() => {
    getMyTesting(skipPage, pageSize);
    return () => {
      $destroy.next(true);
      $destroy.complete();
    };
  }, []);

  const getMyTesting = async (skip: number, take: number) => {
    myTestingService
      .getAll(skip, take)
      .pipe(takeUntil($destroy))
      .subscribe((res: any) => {
        setMyTesting(res.data.results);
        setTotal(res.data.total);
      });
  };

  const onGridChange = async (_pagination: any, _filters: any, sorter: any) => {
    const nextPage = (_pagination.current - 1) * pageSize;
    setSkipPage(nextPage);
    getMyTesting(nextPage, pageSize);
    setCurrentPage(_pagination.current);
  };

  const performATest = (id: number) => {
    history.push(`${ROUTE_PATHS.DoATest}/${id}`);
  }

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
      title: t('assessments.lblResult'),
      dataIndex: 'Result',
      width: '50%',
      render: (Result: string) => {
        return <span>{Result}</span>;
      },
    },
    {
      title: t('common.action'),
      key: 'action',
      width: '15%',
      render: (_: any, record: any) => {
        return (
          <>
            {!record.Result && (
              <Space size='middle'>
                <a className='font-weight-bold' onClick={()=>performATest(record.Id)}>{t('common.perform')}</a>
              </Space>
            )}
          </>
        );
      },
    },
  ];

  return (
    <>
      <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item>{t('Home')}</Breadcrumb.Item>
        <Breadcrumb.Item>{t('My Tesing')}</Breadcrumb.Item>
      </Breadcrumb>
      <div className='page-content employee'>
        <Row className='sub-header'>
          <Col span={12} className='module text-center'>
            <span className='title'>{t('My Testing')}</span>
          </Col>
          <Col span={12}>
            <SelectAssessmentComponent />
          </Col>
        </Row>
        <Table
          columns={columns}
          dataSource={myTestings}
          onChange={onGridChange}
          style={{ height: '400px' }}
          scroll={{ y: 400 }}
          rowKey='contentItemId'
          pagination={{ current: currentPage, pageSize: pageSize, showSizeChanger: false, total: total }}
        />
      </div>
    </>
  );
}
  