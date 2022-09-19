import cookie from 'react-cookies';
import API_PATH from '../constants/apiPath';
import jwt_decode from 'jwt-decode';
import moment from 'moment';
import { AxiosResponse } from 'axios';
import identityServerService from './base/identityServerService';
import { getFormUrlEncoded, HTTP_CONTENT_TYPE } from '@core/utils/httpHelper';

class AuthService {
  async getToken(payload: any) {
    const response = await identityServerService.postAsync<any>(
      API_PATH.GET_TOKEN,
      getFormUrlEncoded(payload),
      HTTP_CONTENT_TYPE.FORM_URLENCODED
    );
    const { data } = response;
    if (data && data.access_token) {
      const decodedToken: any = jwt_decode(data.access_token);
      const newAuthState = {
        accessToken: data.access_token,
        profile: {
          name: payload.username,
          apiurl: decodedToken.apiurl,
        },
        pkhid: decodedToken.pkhid,
        tokenType: data.token_type,
      };
      const expire = moment().add(data.expires_in + 1000000, 's').toDate();
      cookie.save('AUTH_DATA', newAuthState, { expires: expire });
      return newAuthState;
    }
    return undefined;
  }
  getProvider = (payload: any): Promise<AxiosResponse> => {
    return identityServerService.postAsync<any>(
      API_PATH.GET_FACILITY_DETAIL,
      getFormUrlEncoded(payload),
      HTTP_CONTENT_TYPE.FORM_URLENCODED
    );
  };
  signOut = () => {
    identityServerService.clearAllSession();
  };
}

export default new AuthService();
