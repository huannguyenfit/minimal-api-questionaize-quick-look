import { AxiosInitialize } from './axiosInitialize';
const IDENTITY_SERVER_URL = process.env.REACT_APP_IDENTITY_SERVER_ENDPOINT;

class IdentityService extends AxiosInitialize {
  constructor() {
    super(IDENTITY_SERVER_URL, false);
  }
}

export default new IdentityService();
