import i18n from "@core/utils/i18n";
import { TDModuleEnum } from "../enums/moduleEnums";

export interface Module {
  id: number;
  name: string;
}

export const Modules = [
  {
    id: TDModuleEnum.PatientRegistration,
    name: i18n.t('module.patientRegistration')
  },
  {
    id: TDModuleEnum.PatientAppointment,
    name: i18n.t('module.patientAppointment')
  },
] as Module[];
