export const API_URL = process.env.REACT_APP_API_ENDPOINT;
export const IDENTITY_SERVER_URL = process.env.REACT_APP_IDENTITY_SERVER_ENDPOINT;
enum ROUTE_PATHS {
  Home = '/home',
  Login = '/login',
  NoPermission = '/no-persission',
  QuestionList = '/questions',
  MyTasks = '/my-task',
  Appoinment = '/appoinment'
}

//this variable is using for params url
const ROUTE_DYNAMIC_VARIABLE_LIST = [':id'];

enum ROUTE_DYNAMIC_VARIABLE {
  'id' = ':id',
}

export { ROUTE_PATHS, ROUTE_DYNAMIC_VARIABLE_LIST, ROUTE_DYNAMIC_VARIABLE };
