import { lazyMinLoadTime } from "@core/components/LazyLoaderDelay";
import { ROUTE_PATHS } from "@core/constants/routeConfig";
import i18n from "@core/utils/i18n";

//template
const PharmacyManagement = lazyMinLoadTime(() =>
    import('modules/master-data/pages/PharmacyManagement').then(({ PharmacyManagement }) => ({ default: PharmacyManagement }))
);
export const MasterDataRoutings = [
    //template
    {
        path: `${ROUTE_PATHS.PharmacyManagement}`,
        element: <PharmacyManagement />,
        title: i18n.t('page.pharmacyManagement'),
        loginRequired: true,
        permissions: [],
    },
    //page 2



    //page 3


];