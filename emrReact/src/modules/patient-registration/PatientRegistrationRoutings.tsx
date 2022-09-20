import { lazyMinLoadTime } from "@core/components/LazyLoaderDelay";
import { ROUTE_PATHS } from "@core/constants/routeConfig";
import i18n from "@core/utils/i18n";

//template
const PatientRegistration = lazyMinLoadTime(() =>
    import('modules/patient-registration/pages/PatientRegistration').then(({ PatientRegistration }) => ({ default: PatientRegistration }))
);
export const PatientRegistrationRoutings = [
    //template
    {
        path: ROUTE_PATHS.PatientRegistration,
        element: <PatientRegistration />,
        title: i18n.t('page.patientAppointmentTitle'),
        loginRequired: true,
        permissions: [],
    },
   // page 2



    //page 3


];