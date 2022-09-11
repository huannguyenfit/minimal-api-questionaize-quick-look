import { ROUTE_PATHS } from './route-config';
import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
export const MenuConfigs = [
  {
    text: 'Danh sách chờ khám',
    icon: CloudQueueOutlinedIcon,
    navigateTo: ROUTE_PATHS.MyTasks,
  },
  {
    text: 'Đăng ký bệnh nhân',
    icon: HowToRegOutlinedIcon,
    childrens: [
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
    ],
  },

  {
    text: 'Khám bệnh',
    navigateTo: '#',
    icon: LocalHospitalOutlinedIcon,
    childrens: [
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
    ],
  },

  {
    navigateTo: 'kham-benh-noi-tru',
    text: 'Khám bệnh nội trú',
    icon: AddBusinessOutlinedIcon,
    childrens: [
      {
        text: 'Khám bệnh nội trú',
        navigateTo: ROUTE_PATHS.Home,
      },
      {
        text: 'Quản lý tình hình khoa',
        navigateTo: '/empty',
      },
      {
        text: 'Giấy chuyển tuyến',
        navigateTo: '/empty',
      },
      {
        text: 'Hội chẩn',
        navigateTo: '/empty',
      },
      {
        text: 'Phác đồ điều trị',
        navigateTo: '/empty',
      },
      {
        text: 'Khác',
        navigateTo: '/empty',
      },
      {
        text: 'Quản lý khoa TTCT',
        navigateTo: '/empty',
      },
    ],
  },
  {
    text: 'Hẹn bệnh',
    navigateTo: 'hen-benh',
    icon: AccessAlarmOutlinedIcon,
    childrens: [
      {
        text: 'Quản lý hẹn bệnh',
        navigateTo: '/empty',
      },
      {
        text: 'Khám sức khỏe',
        navigateTo: '/empty',
      },
    ],
  },
  {
    text: 'Xét nghiệm',
    navigateTo: 'xet-nghiem',
    icon: ScienceOutlinedIcon,
  },
] as any;
