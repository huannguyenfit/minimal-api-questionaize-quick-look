import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import { ROUTE_DYNAMIC_VARIABLE, ROUTE_PATHS } from './@core/constants/route-config';
import Loading from './@core/utils/loading/loading';
import RouteLayout from './layout/route-layout';
import { lazy } from 'react'
import MainLayout from 'layout/main/main';
import AuthLayout from 'layout/auth/auth';

const HomePage = lazy(() =>
  import('pages/home/home')
    .then(({ Home }) => ({ default: Home })),
);



const mainLayoutRoutings = [
  { 
    element: <MainLayout/>,
    children: [
      {
        href: ROUTE_PATHS.Home,
        element: <HomePage/>,
        title: 'homePage',
        loginRequired: true,
        permissions: [],
      },
    ]
  }
]


const authLayoutRoutings = [
  { 
    element: <AuthLayout/>,
    children: [
      {
        href: ROUTE_PATHS.Login,
        title: '',
        element: <Login/>,
        loginRequired: false,
        permissions: [],
      },
    ]
  }
];


export const authorizedPage = [
  // {
  //   href: `${ROUTE_PATHS.QuestionList}`,
  //   component: QuestionsListComponent,
  //   title: 'menu.questionList',
  //   loginRequired: true,
  //   permissions: [],
  //   hidden: false,
  // },
  // {
  //   href: `${ROUTE_PATHS.KendoGrid}`,
  //   component: KendoGridComponent,
  //   title: 'menu.kendo Grid',
  //   loginRequired: true,
  //   permissions: [],
  //   hidden: false,
  // },
];


export const routings = [...mainLayoutRoutings, ...authLayoutRoutings]
function App() {
  return (
    <div className='App'>
      <Loading />
      <BrowserRouter>
          {/* {routings.map(({ href, element, title, loginRequired, permissions }) => ( */}
            <RouteLayout routers={routings}
              // key={href ?? ''}
              // path={href ?? ''}
              // element={element}
              // title={title}
              // permissions={permissions}
              // loginRequired={loginRequired}
            />
          {/* ))} */}
          {/* 
          {homePage.map(({ href, component, title, loginRequired, permissions }) => (
            <RouteLayout
              key={href ?? ''}
              path={href ?? ''}
              component={component}
              title={title}
              permissions={permissions}
              loginRequired={loginRequired}
            />
          ))}

          {authPage.map(({ href, component, title, loginRequired }) => (
            <RouteLayout
              key={href ?? ''}
              path={href ?? ''}
              component={component}
              title={title}
              permissions={[]}
              loginRequired={loginRequired}
            />
          ))} */}
        {/* </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
