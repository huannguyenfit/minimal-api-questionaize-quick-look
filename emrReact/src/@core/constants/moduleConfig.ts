import { Module } from "@core/models/common/module";
import { TDModuleEnum } from "@core/models/enums/moduleEnums";


export const modules = [
    {
      id: TDModuleEnum.PatientRegistration,
      name: 'common.patientRegistration',
      description:'',
      icon: ''
    },
    {
      id: TDModuleEnum.MedicalExamination,
      name: 'common.medicalExamination',
      description:'',
      icon: ''
    },
    {
      id: TDModuleEnum.PatientAppointment,
      name:'common.patientAppointment',
      description:'',
      icon: ''
    },
    {
      id: TDModuleEnum.GeneralHealthCheck,
      name: 'common.generalHealthCheck',      
      description:'',
      icon: ''
    },
    {
      id: TDModuleEnum.Subclinical,
      name: 'common.subclinical',  
          description:'',
      icon: ''
    }
    ,
    {
      id: TDModuleEnum.Tests,
      name: 'common.test'    ,
       description:'',
      icon: ''
    }
  ] as Module[];
  