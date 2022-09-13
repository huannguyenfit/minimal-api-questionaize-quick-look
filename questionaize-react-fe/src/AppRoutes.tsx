import MasterLayoutRoutings from 'layout/main/MasterLayoutRoutings';
import AuthLayoutRoutings from 'layout/auth/AuthLayoutRoutings';
import MainRoutes from 'layout/MainRoutes';

const AppRoutes = () => {
  return (
    <MainRoutes routes={[...AuthLayoutRoutings, ...MasterLayoutRoutings]} />
  )
}


export default AppRoutes;