import { AxiosInitialize } from './axiosInitialize';
 const API_URL = process.env.REACT_APP_API_ENDPOINT;

class InternalApiService extends AxiosInitialize {
  constructor() {
    super(API_URL, true);
  }
}
export default new InternalApiService();
