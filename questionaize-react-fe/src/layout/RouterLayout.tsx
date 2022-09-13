import React, { Suspense } from 'react';
import cookie from 'react-cookies';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTE_PATHS } from '../@core/constants/routeConfig';
import AuthLayout from './auth/AuthLayout';
import MainLayout from './main/MasterLayout';

export interface LayoutProps {
  pageTitle: React.ReactNode;
  setPageTitle: (node: React.ReactNode) => void;
  avatar: string;
  setAvatar: (value: string) => void;
}

const RouteLayout = ({ routers, history, ...rest }: any) => {
  console.log('RouteLayout', routers)
  return (
    <>
      <Routes>
        <Route index element={<Navigate to={ROUTE_PATHS.Login} />} />
        <Route path='*' element={<Navigate to={ROUTE_PATHS.Home} />} />

        {routers.map(({ element: Element, children }, index) => {
          console.log('routingn')
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
