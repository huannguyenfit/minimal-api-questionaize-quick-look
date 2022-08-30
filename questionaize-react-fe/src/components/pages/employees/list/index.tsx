import { Col, Form, Input, Row, Select, Table } from 'antd';
import { useEffect, useState } from 'react';
import { RouteChildrenProps } from 'react-router';
import { ROUTE_PATHS } from '../../../../@core/constants/url-config';
import { useTranslation } from 'react-i18next';
import './employee.scss';

interface Props extends RouteChildrenProps {}

export default function EmployeeListComponent(props: Props) {
  const [filterForm] = Form.useForm();
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { t } = useTranslation();

  const columns = [
    {
      title: t('employeeList.lbName'),
      dataIndex: 'fullName',
      width: '20%',
      sorter: true,
      render: (fullName: string) => {
        return <span>{fullName}</span>;
      },
    },
    {
      title: t('Code'),
      dataIndex: 'code',
      width: '9%',
      render: (code: string) => {
        return <span>{code}</span>;
      },
    },
    {
      title: t('employeeList.lbEmail'),
      dataIndex: 'email',
      width: '15%',
    },
    {
      title: t('employeeList.lbPhone'),
      dataIndex: 'phoneNumber',
      width: '8%',
      sorter: true,
    },
    {
      title: t('employeeList.lbDepartment'),
      dataIndex: 'department',
      width: '20%',
      render: (department: any) => {
        return <span>{department?.contentItems[0]?.name}</span>;
      },
    },
  ];

  return (
    <div className='page-content employee'>
      <Row className='sub-header'>
        <Col className='module text-center'>
          <span className='title'>{t('Questionaire Testing')}</span>
        </Col>
      </Row>
      <Table
        columns={columns}
        // dataSource={employees.items}
        // onChange={handleTableChange}
        rowKey='contentItemId'
        pagination={{ current: currentPage, showSizeChanger: false, total: 0 }}
      />
    </div>
  );
}
