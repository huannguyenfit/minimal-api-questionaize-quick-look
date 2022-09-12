import React, { Suspense } from 'react';
import cookie from 'react-cookies';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTE_PATHS } from '../@core/constants/route-config';
import AuthLayout from './auth/auth';
import MainLayout from './main/main';

export interface LayoutProps {
  pageTitle: React.ReactNode;
  setPageTitle: (node: React.ReactNode) => void;
  avatar: string;
  setAvatar: (value: string) => void;
}

const RouteLayout = ({ routers, history, ...rest }: any) => {
  const redirectPath = window.location.pathname;

  let isLoggedIn = true;

  return (
    <>
      <Routes>
        <Route index element={<Navigate to={ROUTE_PATHS.Login} />} />
        <Route path='*' element={<Navigate to={ROUTE_PATHS.Home} />} />

        {routers.map(({ element: Element, children }, index) => {
          if (children && children.length > 0) {
            return (
              <Route path={'/'} key={index} element={Element}>
                {children.map(({ href, element: ChildElement, children, loginRequired, permissions }) => {
                  return (
                    <>
                      <Route path={href} key={href ?? ''} exact={true} {...rest} element={ChildElement} />
                    </>
                  );
                })}
              </Route>
            );
          }
        })}
      </Routes>
    </>
  );
};

export default RouteLayout;
