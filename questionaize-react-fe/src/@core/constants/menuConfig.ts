import { ROUTE_PATHS } from './routeConfig';
import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';
import i18n from '@core/utils/i18n';
import { TDModuleEnum } from '@core/models/enums/moduleEnums';
import { IMenuItem } from '@core/models/common/menu';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
const PatientRegistrationMenu: IMenuItem[] = [
  {
    text: 'Ngoại trú',
    navigateTo: ROUTE_PATHS.Home,
  },
  {
    text: 'Nội trú',
    navigateTo: '/empty',
  },
  {
    text: 'Báo cáo - Thống kê',
    navigateTo: '/empty',
  },
  {
    text: 'Thu tiền khác',
    navigateTo: '/empty',
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
    text: i18n.t('common.myTask'),
    icon: CloudQueueOutlinedIcon,
    navigateTo: ROUTE_PATHS.MyTasks,
  },
  {
    moduleId: TDModuleEnum.PatientRegistration,
    text: i18n.t('common.patientRegistration'),
    icon: HowToRegOutlinedIcon,
    children: PatientRegistrationMenu,
  },
  {
    moduleId: TDModuleEnum.PatientAppointment,
    text: i18n.t('common.patientAppointment'),
    navigateTo: ROUTE_PATHS.Appoinment,
    icon: ScheduleOutlinedIcon,
  },
  {
    moduleId: TDModuleEnum.MedicalExamination,
    text: i18n.t('common.medicalExamination'),
    navigateTo: '#',
    icon: LocalHospitalOutlinedIcon,
    children: MedicalExaminationMenu,
  },
  {
    moduleId: TDModuleEnum.Tests,
    text: i18n.t('common.test'),
    navigateTo: 'test',
    icon: ScienceOutlinedIcon,
    children: PatientAppointmentMenu,
  },
  {
    moduleId: TDModuleEnum.Diagnostic,
    text: i18n.t('common.diagnostic'),
    navigateTo: 'diagnostic',
    icon: ImageSearchOutlinedIcon,
    children: [],
  },
]
