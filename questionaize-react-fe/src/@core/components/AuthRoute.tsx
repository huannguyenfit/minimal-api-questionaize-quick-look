import { Navigate, Route, RouteProps } from 'react-router-dom';
// import { useAuth } from "../../auth/contexts/AuthProvider";
import { ROUTE_PATHS } from '@core/constants/routeConfig';
type PrivateRouteProps = {
  roles?: string[];
} & RouteProps;

const AuthRoute = ({ children, roles, ...routeProps }: PrivateRouteProps) => {
  //const { hasRole, userInfo } = useAuth();
  const hasRole = ([]) => {
    return true;
  };
  const userInfo = true;
  if (userInfo) {
    // if (!hasRole(roles)) {
    //   return <Navigate to={ROUTE_PATHS.NoPermission} />;
    // }
    return <Route {...routeProps} />;
  } else {
    return <Navigate to={ROUTE_PATHS.Login} />;
  }
};

export default AuthRoute;
