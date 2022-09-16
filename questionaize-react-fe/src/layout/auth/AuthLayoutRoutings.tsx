import AuthLayout from './AuthLayout'
import { lazyMinLoadTime } from '@core/components/LazyLoaderDelay';
import i18n from '@core/utils/i18n';
import { ROUTE_PATHS } from '@core/constants/routeConfig';
const Login = lazyMinLoadTime(() => import('modules/authentication/Login').then(({ Login }) => ({ default: Login })));
const Register = lazyMinLoadTime(() => import('modules/authentication/Register').then(({ Register }) => ({ default: Register })));


const authLayoutRoutings = [
  {
    element: <AuthLayout />,
    path: '/',
    children: [
      {
        path: ROUTE_PATHS.Login,
        title: i18n.t('login'),
        element: <Login />,
        loginRequired: false,
        permissions: [],
      },
      {
        path: ROUTE_PATHS.Register,
        title: i18n.t('register'),
        element: <Register />,
        loginRequired: false,
        permissions: [],
      },
    ],
  },
];

export default authLayoutRoutings; 