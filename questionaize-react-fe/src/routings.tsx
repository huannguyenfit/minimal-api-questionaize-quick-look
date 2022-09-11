import MainLayout from 'layout/main/main';
import AuthLayout from 'layout/auth/auth';
import { Home } from 'pages/home/home';
import { lazy } from 'react';
import { ROUTE_DYNAMIC_VARIABLE, ROUTE_PATHS } from '@core/constants/route-config';
import Login from 'pages/login/login';
import { MyTasks } from 'pages/my-tasks/my-task';

// const HomePage = lazy(() => import('pages/home/home').then(({ Home }) => ({ default: Home })));

// const MedicalExamList = lazy(() =>
//   import('pages/medical-exam/medical-exam-list').then(({ MedicalExamList }) => ({ default: MedicalExamList }))
// );

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
