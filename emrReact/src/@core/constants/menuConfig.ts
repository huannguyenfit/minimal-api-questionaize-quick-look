import { ROUTE_PATHS } from './routeConfig';
import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import { TDModuleEnum } from '@core/models/enums/moduleEnums';
import { IMenuItem } from '@core/models/common/menu';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import ListIcon from '@mui/icons-material/List';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';

const PatientRegistrationMenu: IMenuItem[] = [
  {
    text: 'common.receivingPatient',
    navigateTo: ROUTE_PATHS.PatientRegistration,
    icon: '',
    index: true
  },
  
];
const MasterDataMenu: IMenuItem[] = [
  {
    text: 'common.pharmacyManagement',
    navigateTo: ROUTE_PATHS.PharmacyManagement,
    icon: ''
  },
];


const MedicalExaminationMenu: IMenuItem[] = [
  {
    text: 'comon.patientDashboard',
    navigateTo: ROUTE_PATHS.PatientDashboard,
    index: true
  },
];

const PatientAppointmentMenu: IMenuItem[] = [
  {
    text: 'patientAppointment.list',
    navigateTo: ROUTE_PATHS.PatientAppointmentList,
    icon: ListIcon,
  },
  {
    text: 'patientAppointment.patientList',
    navigateTo: ROUTE_PATHS.PatientAppointmentPatientList,
    icon: PermContactCalendarIcon,
  },
  {
    text: 'patientAppointment.appointmentCreate',
    navigateTo: ROUTE_PATHS.PatientAppointmentPatientCreate,
    icon: EventIcon
  },
];

export const MainMenu: IMenuItem[] = [
  {
    text: 'common.myTask',
    icon: CloudQueueOutlinedIcon,
  },
  {
    moduleId: TDModuleEnum.PatientRegistration,
    text: 'common.patientRegistration',
    icon: HowToRegOutlinedIcon,
    children: PatientRegistrationMenu,
  },
  {
    moduleId: TDModuleEnum.PatientAppointment,
    text: 'common.patientAppointment',
    icon: ScheduleOutlinedIcon,
    children: PatientAppointmentMenu,
  },
  {
    moduleId: TDModuleEnum.MedicalExamination,
    text: 'common.medicalExamination',
    icon: LocalHospitalOutlinedIcon,
    children: MedicalExaminationMenu,
  },
  {
    moduleId: TDModuleEnum.Tests,
    text: 'common.test',
    icon: ScienceOutlinedIcon,
  },
   {
    moduleId: TDModuleEnum.SystemConfig,
    text: 'common.SystemConfig',
    icon: SettingsIcon,
    children: MasterDataMenu
  },
]
