import { lazy } from 'react';
import { ROUTE_PATHS } from '@core/constants/routeConfig';
import AuthLayout from './AuthLayout'
const Login = lazy(() => import('pages/login/Login').then(({ Login }) => ({ default: Login })));

const AuthLayoutRoutings = [
  {
    element: <AuthLayout />,
    children: [
      {
        href: ROUTE_PATHS.Login,
        title: '',
        element: <Login />,
        loginRequired: false,
        permissions: [],
      },
    ],
  },
];

export default AuthLayoutRoutings; 