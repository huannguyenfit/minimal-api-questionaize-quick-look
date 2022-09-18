import { Module } from "@core/models/common/module";
import { TDModuleEnum } from "@core/models/enums/moduleEnums";
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import EventIcon from '@mui/icons-material/Event';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
export const modules = [
  {
    id: TDModuleEnum.PatientRegistration,
    name: 'common.patientRegistration',
    description: '',
    icon: <HowToRegOutlinedIcon/>
  },
  {
    id: TDModuleEnum.MedicalExamination,
    name: 'common.medicalExamination',
    description: '',
    icon: <LocalHospitalOutlinedIcon/>
  },
  {
    id: TDModuleEnum.PatientAppointment,
    name: 'common.patientAppointment',
    description: '',
    icon: <EventIcon/>
  },
  {
    id: TDModuleEnum.GeneralHealthCheck,
    name: 'common.generalHealthCheck',
    description: '',
    icon: <MonitorHeartIcon/>
  },
  {
    id: TDModuleEnum.Subclinical,
    name: 'common.subclinical',
    description: '',
    icon: <ScienceOutlinedIcon/>
  },
  {
    id: TDModuleEnum.Tests,
    name: 'common.test',
    description: '',
    icon: <ScienceOutlinedIcon/>
  }
] as Module[];


