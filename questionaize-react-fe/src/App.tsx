import cookie from 'react-cookies';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import HomePage from './components/pages/home/home';
import Login from './components/pages/login/login';
import QuestionsListComponent from './components/pages/questions/list';

import { ROUTE_DYNAMIC_VARIABLE, ROUTE_PATHS } from './@core/constants/url-config';

import Loading from './@core/utils/loading/loading';

import RouteLayout from './views/layout/route-layout';
import AssesmentsListComponent from './components/pages/assessments/list';
import MyTestingListComponent from './components/pages/employees/my-testing';
import DoATestComponent from './components/pages/employees/my-testing/make-a-test/do-a-test';

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
  },
  {
    href: `${ROUTE_PATHS.AssessmentList}`,
    component: AssesmentsListComponent,
    title: 'menu.assessmentList',
    loginRequired: true,
    permissions: [],
  },
  {
    href: `${ROUTE_PATHS.MyTesting}`,
    component: MyTestingListComponent,
    title: 'menu.myTesting',
    loginRequired: true,
    permissions: [],
  },
  {
    href: `${ROUTE_PATHS.DoATest}/${ROUTE_DYNAMIC_VARIABLE.testId}`,
    component: DoATestComponent,
    title: 'menu.doATest',
    hidden: true,
    loginRequired: true,
    permissions: [],
  },
];

function App() {
  return (
    <div className='App'>
      <Loading />
      <BrowserRouter>
        <Switch>
          {authorizedPage.map(({ href, component, title, loginRequired, permissions }) => (
            <RouteLayout
              key={href ?? ''}
              path={href ?? ''}
              component={component}
              title={title}
              permissions={permissions}
              loginRequired={loginRequired}
            />
          ))}

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
          ))}
          <Redirect to={ROUTE_PATHS.QuestionList} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
