import MasterLayout from './MasterLayout';
import { lazy } from 'react';
import {  ROUTE_PATHS } from '@core/constants/routeConfig';

const Home = lazy(() => import('pages/home/Home').then(({ Home }) => ({ default: Home })));
const MyTasks = lazy(() =>
  import('pages/my-tasks/MyTask').then(({ MyTasks }) => ({ default: MyTasks }))
);

const Appoinment = lazy(() => import('pages/appoinment/Appoinment').then(({ Appoinment }) => ({ default: Appoinment })));

const MasterLayoutRoutings = [
  {
    element: <MasterLayout />,
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



export default MasterLayoutRoutings; 
