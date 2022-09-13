import cookie from 'react-cookies';
import API_PATH from '../constants/apiPath';
import jwt_decode from 'jwt-decode';

import { AxiosResponse } from 'axios';
import identityServerService from './base/identityServerService';

class AuthService {
  async getToken(payload: any) {
    const response = await identityServerService.postAsync<any>(API_PATH.GET_TOKEN, payload, 'application/x-www-form-urlencoded');
    const { data } = response;
    if (data && data.access_token) {
      const decodedToken: any = jwt_decode(data.access_token);
      const newAuthState = {
        accessToken: data.access_token,
        isAuthenticated: true,
        profile: {
          name: payload.username,
          apiurl: decodedToken.apiurl,
        },
        pkhid: decodedToken.pkhid,
      };
      cookie.save('AUTH_DATA', JSON.stringify(newAuthState), {
        path: '/',
        expires: new Date(),
        maxAge: 1000,
        secure: true,
        httpOnly: true,
      });
      return newAuthState;
    }
    return undefined;
  }
  getProvider = (payload: any): Promise<AxiosResponse> => {
    return identityServerService.postAsync<any>(API_PATH.GET_FACILITY_DETAIL, payload, 'application/x-www-form-urlencoded');
  };
  signOut = () => {
    identityServerService.clearAllSession();
  };
}

export default new AuthService();
