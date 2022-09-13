import {  IDENTITY_SERVER_URL } from '@core/constants/routeConfig';
import { AxiosInitialize } from './axiosInitialize';



class IdentityService extends AxiosInitialize {
  constructor() {
    super(IDENTITY_SERVER_URL);
    console.log('====>vô IDENTITY_SERVER_URL', IDENTITY_SERVER_URL)

  }
}

export default new IdentityService();
