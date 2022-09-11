const API_URL = process.env.REACT_APP_API_ENDPOINT;

enum ROUTE_PATHS {
  Home = '/home',
  Login = '/login',
  QuestionList = '/questions',
  KendoGrid = '/kendo-grid'
}

//this variable is using for params url
const ROUTE_DYNAMIC_VARIABLE_LIST = [':id'];

enum ROUTE_DYNAMIC_VARIABLE {
  'id' = ':id',
  'testId' = ':testId'
}
export default API_URL;

export { ROUTE_PATHS, ROUTE_DYNAMIC_VARIABLE_LIST, ROUTE_DYNAMIC_VARIABLE };
