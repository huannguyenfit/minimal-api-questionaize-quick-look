import cookie from 'react-cookies';
import API_PATH from '../constants/apiPath';
import { getAsync, postAsync } from '../utils/httpClient';
import { AxiosResponse } from 'axios';

class AuthService {
  getToken = async (payload: any): Promise<AxiosResponse<any[]>> => {
    const response = await postAsync(`${API_PATH.LOGIN}`, payload);
    console.log(response);
    const token = "Token"
    //set token
    // cookie.save('ACCESS_TOKEN', token, {
    //   path: '/',
    //   expires: new Date(),
    //   maxAge: 1000,
    //   domain: 'https://play.bukinoshita.io',
    //   secure: true,
    //   httpOnly: true,
    // });
    return response;
  };
  // getProvider = (payload: any): Promise<AxiosResponse<any[]>> => {
  //    //Do Something
  // }
}

export default new AuthService();
