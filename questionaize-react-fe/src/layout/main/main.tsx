import { DownOutlined, ImportOutlined, KeyOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Avatar, Badge, Col, Dropdown, Layout, Menu, Popover, Row } from 'antd';
import { default as React, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { authorizedPage } from 'App';
 import ModuleIcon from 'assets/icon/module-icon.svg';
// import Logo from '../../../../assets/images/logo.svg';
import { ROUTE_PATHS } from '@core/constants/url-config';

import './main.scss';

const { Header, Content } = Layout;

const MainLayout = ({ children }: any) => {
  const history = useHistory();
  const { t } = useTranslation();

  //get current page index
  const path = window.location.pathname;
  //get current menu
  const currentModule = authorizedPage;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [children]);

  const userDropdownItems = (
    <Menu>
      <Menu.Item key='2' icon={<ImportOutlined />}>
        {t('common.signOut')}
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className='main-layout'>
      <Header>
        <Row className='header' justify='space-between'>
          <Col>
            <Row>
              <Col style={{ width: 110 }}>
                <Popover id='module-dropdown' placement='bottomLeft' trigger='click'>
                  <img alt="module" src={ModuleIcon} className="app-icon cur" />
                </Popover>

                <img
                  src='https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
                  alt='logo'
                  onClick={() => history.push(ROUTE_PATHS.Home)}
                  className='cur'
                  height={40}
                />
              </Col>
              <Col>
                <Menu mode='horizontal'>
                  {currentModule.filter(p=> !p.hidden).map((item, index) => {
                    return (
                      <Menu.Item key={item.href}>
                        {t(`${item.title}`)}
                        <Link to={item.href ?? ''} />
                      </Menu.Item>
                    );
                  })}
                </Menu>
              </Col>
            </Row>
          </Col>
          <Col className='right'>
            <Dropdown overlay={userDropdownItems} trigger={['click']}>
              <div className='user-info cur'>
              <Avatar  size={32} src={"http://cdn.onlinewebfonts.com/svg/img_568656.png"} />
                <div className='box-info' >
                  <div className='name'>admin</div>
                </div>
              </div>
            </Dropdown>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Layout className='body-layout'>
          <Content
            style={{
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
