import { ROUTE_PATHS } from './routeConfig';
import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';
import { TDModuleEnum } from '@core/models/enums/moduleEnums';
import { IMenuItem } from '@core/models/common/menu';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
const PatientRegistrationMenu: IMenuItem[] = [
  {
    text: 'common.receivingPatient',
    navigateTo: ROUTE_PATHS.PatientRegistration,
  },
  
];


const MedicalExaminationMenu: IMenuItem[] = [
  {
    text: 'Khám bệnh',
    navigateTo: ROUTE_PATHS.Home,
  },
  {
    text: 'Hẹn bệnh',
    navigateTo: '/empty',
  },
  {
    text: 'Thống kê',
    navigateTo: '/empty',
  },
  {
    text: 'Quản lý tình hình khoa',
    navigateTo: '/empty',
  },
  {
    text: 'Giấy chuyển tuyến',
    navigateTo: '/empty',
  },
  {
    text: 'Hội chuẩn',
    navigateTo: '/empty',
  },
  {
    text: 'Phác đồ điều trị',
    navigateTo: '/empty',
  },
];

const PatientAppointmentMenu: IMenuItem[] = [
  {
    text: 'Quản lý hẹn bệnh',
    navigateTo: '/empty',
  },
  {
    text: 'Khám sức khỏe',
    navigateTo: '/empty',
  },
];

export const MainMenu: IMenuItem[] = [
  {
    text: 'common.myTask',
    icon: CloudQueueOutlinedIcon,
    navigateTo: ROUTE_PATHS.MyTasks,
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
    navigateTo: ROUTE_PATHS.PatientAppointment,
    icon: ScheduleOutlinedIcon,
  },
  {
    moduleId: TDModuleEnum.MedicalExamination,
    text: 'common.medicalExamination',
    navigateTo: '#',
    icon: LocalHospitalOutlinedIcon,
    children: MedicalExaminationMenu,
  },
  {
    moduleId: TDModuleEnum.Tests,
    text: 'common.test',
    navigateTo: 'test',
    icon: ScienceOutlinedIcon,
    children: PatientAppointmentMenu,
  },
  // {
  //   moduleId: TDModuleEnum.Diagnostic,
  //   text: 'common.diagnostic',
  //   navigateTo: 'diagnostic',
  //   icon: ImageSearchOutlinedIcon,
  //   children: [],
  // },
]
