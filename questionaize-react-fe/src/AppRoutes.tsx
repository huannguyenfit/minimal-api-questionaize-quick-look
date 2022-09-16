import React, { lazy } from 'react';
import { Navigate, Route, Routes, useRoutes } from 'react-router-dom';
import { ROUTE_PATHS } from '@core/constants/routeConfig';
import AuthLayoutRoutings from 'layout/auth/AuthLayoutRoutings';
import MasterLayoutRoutings from 'layout/main/MasterLayoutRoutings';
import { AuthRoute } from '@core/components/AuthRoute';
import masterLayoutRoutings from 'layout/main/MasterLayoutRoutings';
import authLayoutRoutings from 'layout/auth/AuthLayoutRoutings';

export interface LayoutProps {
  pageTitle: React.ReactNode;
  setPageTitle: (node: React.ReactNode) => void;
  avatar: string;
  setAvatar: (value: string) => void;
}
const NotFound = lazy(() => import('modules/others/NotFound').then(({ NotFound }) => ({ default: NotFound })));
const Forbidden = lazy(() => import('modules/others/Forbidden').then(({ Forbidden }) => ({ default: Forbidden })));

const AppRoutes = () => {
  const routes = [...authLayoutRoutings, ...masterLayoutRoutings]
  console.log('routes')

  return (
    <>
      <Routes>
        <Route index element={<Navigate to={ROUTE_PATHS.Login} />} />
        <Route path='*' element={<Navigate to={'/not-found'} />} />
        <Route path='/not-found' element={<NotFound />} />
        <Route path='/no-permission' element={<Forbidden />} />
        {routes.map(({ element: Element, children, path }, index) => {
          if (children && children.length > 0) {
            return (
              <Route path={path} key={index} element={Element}>
                <Route path='*' element={<Navigate to={'/not-found'} />} />

                {children.map(({ path, element: ChildElement, loginRequired, permissions }, childIndex: number) => {
                  return (
                    <>
                      {loginRequired
                        ? (
                          <Route key={`childRouteAuth_${childIndex}`} path='/' element={<AuthRoute />}>
                            <Route path={path} element={ChildElement} />
                          </Route>
                        )
                        : <Route key={`childRoute_${childIndex}`} path={path} element={ChildElement} />
                      }
                    </>
                  )
                })}
              </Route>
            );
          }
          return <></>
        })}
      </Routes>
    </>
  );
};
export default AppRoutes;
