import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import HomePage from './pages/home/home';
import Login from './pages/login/login';
import { ROUTE_DYNAMIC_VARIABLE, ROUTE_PATHS } from './@core/constants/url-config';
import Loading from './@core/utils/loading/loading';
import RouteLayout from './@layout/route-layout';
import { lazy } from 'react'

const QuestionsListComponent = lazy(() =>
  import('pages/questions')
    .then(({ QuestionsListComponent }) => ({ default: QuestionsListComponent })),
);


const authPage = [
  {
    href: ROUTE_PATHS.Login,
    title: '',
    component: Login,
    loginRequired: false,
    permissions: [],
  },
];

const homePage = [
  {
    href: ROUTE_PATHS.Home,
    component: HomePage,
    title: 'homePage',
    loginRequired: true,
    permissions: [],
  },
];

export const authorizedPage = [
  {
    href: `${ROUTE_PATHS.QuestionList}`,
    component: QuestionsListComponent,
    title: 'menu.questionList',
    loginRequired: true,
    permissions: [],
    hidden: false,
  },
];


export const routings = [...authPage, ...homePage, ...authorizedPage]
function App() {
  return (
    <div className='App'>
      <Loading />
      <BrowserRouter>
        <Switch>
          {routings.map(({ href, component, title, loginRequired, permissions }) => (
            <RouteLayout
              key={href ?? ''}
              path={href ?? ''}
              component={component}
              title={title}
              permissions={permissions}
              loginRequired={loginRequired}
            />
          ))}
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
          <Redirect to={ROUTE_PATHS.Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
