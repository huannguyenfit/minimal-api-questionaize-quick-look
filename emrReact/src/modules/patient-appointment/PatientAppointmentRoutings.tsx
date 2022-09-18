import { lazyMinLoadTime } from "@core/components/LazyLoaderDelay";
import { ROUTE_PATHS } from "@core/constants/routeConfig";
import i18n from "@core/utils/i18n";
const PatientAppointment = lazyMinLoadTime(() =>
    import('modules/patient-appointment/pages/PatientAppointment').then(({ PatientAppointment }) => ({ default: PatientAppointment }))
);
export const PatientAppointmentRoutings = [
    {
        path: ROUTE_PATHS.PatientAppointment,
        element: <PatientAppointment />,
        title: i18n.t('page.patientAppointmentTitle'),
        loginRequired: true,
        permissions: [],
    },
    //page 2



    //page 3


];