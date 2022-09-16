import { lazyMinLoadTime } from "@core/components/LazyLoaderDelay";
import { ROUTE_DYNAMIC_VARIABLE, ROUTE_PATHS } from "@core/constants/routeConfig";
import i18n from "@core/utils/i18n";

//template
const PatientDashboard = lazyMinLoadTime(() =>
    import('modules/medical-examination/pages/PatientDashboard').then(({ PatientDashboard }) => ({ default: PatientDashboard }))
);
export const MedicalExaminationRoutings = [
    //template
    {
        path: `${ROUTE_PATHS.PatientDashboard}`,
        element: <PatientDashboard />,
        title: i18n.t('page.patientDashboard'),
        loginRequired: true,
        permissions: [],
    },
    //page 2



    //page 3


];