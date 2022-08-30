import React from 'react';
import cookie from 'react-cookies';
import { Redirect, Route } from 'react-router-dom';
import { ROUTE_PATHS } from '../../@core/constants/url-config';
import AuthLayout from './auth/auth';
import MainLayout from './main/main';

export interface LayoutProps {
  pageTitle: React.ReactNode;
  setPageTitle: (node: React.ReactNode) => void;
  avatar: string;
  setAvatar: (value: string) => void;
}

const RouteLayout = ({ component: Component, history, ...rest }: any) => {
  const [pageTitle, setPageTitle] = React.useState<React.ReactNode>(rest.title);
  const redirectPath = window.location.pathname;

  let isLoggedIn = true;
  let isLoginRequired = rest.loginRequired;


  return (
    <Route
      {...rest}
      exact={rest.exact}
      render={(props) =>
        !isLoggedIn && isLoginRequired ? (
          <Redirect to={{ pathname: ROUTE_PATHS.Login, search: `url=${redirectPath}` }} />
        ) : isLoggedIn && isLoginRequired ? (
          <MainLayout>
            <Component {...props} pageTitle={pageTitle} setPageTitle={setPageTitle} />
          </MainLayout>
        ) : (
          <AuthLayout>
            <Component {...props}></Component>
          </AuthLayout>
        )
      }
    />
  );
};

export default RouteLayout;
