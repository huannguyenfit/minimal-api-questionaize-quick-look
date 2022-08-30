import { Badge, Breadcrumb, Button, Col, Form, Input, Row, Select, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import { RouteChildrenProps } from 'react-router';
import { ROUTE_PATHS } from '../../../../@core/constants/url-config';
import { useTranslation } from 'react-i18next';
import './questions.scss';
import { TypeInputEnum } from '../../../../@core/utils/enums';
import questionsService from '../../../../@core/services/questions.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PlusOutlined } from '@ant-design/icons';
import QuestionsCreateComponent from '../create/question-create';

interface Props extends RouteChildrenProps {}

export default function QuestionsListComponent(props: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [skipPage, setSkipPage] = useState(0);
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

  const getQuestions = async (skip: number, take: number) => {
    questionsService
      .getAll(skip, take)
      .pipe(takeUntil($destroy))
      .subscribe((res: any) => {
        setQuestions(res.data.results);
        setTotal(res.data.total);
        console.log(res.data);
      });
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
      title: t('questions.lblSubTitle'),
      dataIndex: 'SubTitle',
      width: '14%',
      render: (SubTitle: string) => {
        return <span>{SubTitle}</span>;
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
      title: t('questions.lblStatus'),
      dataIndex: 'NumberOfTimesSelected',
      width: '10%',
      render: (NumberOfTimesSelected: number) => {
        return <span>{NumberOfTimesSelected <= 10 ? <Badge color={'blue'} text={'new'} /> : 'old'}</span>;
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
    getQuestions(nextPage, pageSize);
    setCurrentPage(_pagination.current);
  };

  const viewDetails = (id: number) => {
    return;
  };
  const refreshGridView = () => {
    getQuestions(skipPage, pageSize);
  };
  return (
    <>
      <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item>{t('Home')}</Breadcrumb.Item>
        <Breadcrumb.Item>{t('Questions')}</Breadcrumb.Item>
      </Breadcrumb>
      <div className='candidate-list page-content employee'>
        <div className='list-header'>
          <Row>
            <Col span={12}>
              <h1 className='page-title'>{t('Questions')}</h1>
            </Col>
            <Col span={12}>
              <QuestionsCreateComponent refreshGridView={refreshGridView} />
            </Col>
          </Row>
        </div>
        <Table
          style={{ height: '400px' }}
          scroll={{ y: 400 }}
          columns={columns}
          dataSource={questions}
          onChange={onGridChange}
          rowKey='Id'
          pagination={{ current: currentPage, showSizeChanger: false, pageSize: pageSize, total: total }}
        />
      </div>
    </>
  );
}
