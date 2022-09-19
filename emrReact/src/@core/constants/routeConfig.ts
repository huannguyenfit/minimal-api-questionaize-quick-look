
enum ROUTE_PATHS {
  Home = '/home',
  Login = '/login',
  Register = '/register',
  NoPermission = '/no-permission',
  MyTasks = '/my-task',
  PatientAppointment = '/appointment',
  PatientDashboard = `/patient-dashboard`,
  PatientRegistration = '/patient-registration',
  PatientAppointmentList = '/list',
  PatientAppointmentPatientList = '/patient/list',
  PatientAppointmentPatientCreate = '/patient/create',
  PharmacyManagement = '/pharmacy-management',
}

//this variable is using for params url
const ROUTE_DYNAMIC_VARIABLE_LIST = [':id'];

enum ROUTE_DYNAMIC_VARIABLE {
  'id' = ':id',
}

export { ROUTE_PATHS, ROUTE_DYNAMIC_VARIABLE_LIST, ROUTE_DYNAMIC_VARIABLE };
