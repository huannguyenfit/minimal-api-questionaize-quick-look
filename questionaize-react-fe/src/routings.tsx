import MainLayout from 'layout/main/MasterLayout';
import AuthLayout from 'layout/auth/AuthLayout';
import { lazy } from 'react';
import { ROUTE_DYNAMIC_VARIABLE, ROUTE_PATHS } from '@core/constants/routeConfig';

const Home = lazy(() => import('pages/home/Home').then(({ Home }) => ({ default: Home })));

const Login = lazy(() =>
  import('pages/login/Login').then(({ Login }) => ({ default: Login }))
);
const MyTasks = lazy(() =>
  import('pages/my-tasks/MyTask').then(({ MyTasks }) => ({ default: MyTasks }))
);
const Appoinment = lazy(() => import('pages/appoinment/Appoinment').then(({ Appoinment }) => ({ default: Appoinment })));

const mainLayoutRoutings = [
  {
    element: <MainLayout />,
    children: [
      {
        href: ROUTE_PATHS.Home,
        element: <Home />,
        title: 'homePage',
        loginRequired: true,
        permissions: [],
      },
      {
        href: ROUTE_PATHS.MyTasks,
        element: <MyTasks />,
        title: 'medicalExamList',
        loginRequired: true,
        permissions: [],
      },
      {
        href: ROUTE_PATHS.Appoinment,
        element: <Appoinment />,
        title: 'appoinment',
        loginRequired: true,
        permissions: [],
      },
    ],
  },
];

const authLayoutRoutings = [
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

export const routings = [...authLayoutRoutings, ...mainLayoutRoutings];
