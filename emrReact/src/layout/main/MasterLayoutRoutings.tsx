import MasterLayout from './MasterLayout';
import { lazyMinLoadTime } from '@core/components/LazyLoaderDelay';
import i18n from '@core/utils/i18n';
import { ROUTE_PATHS } from '@core/constants/routeConfig';
import { PatientAppointmentRoutings } from 'modules/patient-appointment/PatientAppointmentRoutings';
import { PatientRegistrationRoutings } from 'modules/patient-registration/PatientRegistrationRoutings';
import { MedicalExamination } from 'modules/medical-examination/pages/MedicalExamination';
import { MedicalExaminationRoutings } from 'modules/medical-examination/MedicalExaminationRoutings';

const MyTasks = lazyMinLoadTime(() =>
  import('pages/my-tasks/MyTask').then(({ MyTasks }) => ({ default: MyTasks }))
);



const masterLayoutRoutings = [{
  element: <MasterLayout />,
   path: '/',
  children: [
    {
      path: ROUTE_PATHS.MyTasks,
      element: <MyTasks />,
      title: i18n.t('page.myTaskTitle'),
      loginRequired: true,
      permissions: [],
    },
    //import modules

   //modules 1,
    ...PatientAppointmentRoutings.map(routes => routes),
  
    //modules 2,
    ...PatientRegistrationRoutings.map(routes => routes),
    
    //modules 3
    ...MedicalExaminationRoutings.map(routes => routes)

  ],
}];



export default masterLayoutRoutings; 
