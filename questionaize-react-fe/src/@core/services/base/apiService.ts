import { AxiosInitialize } from './axiosInitialize';
 const API_URL = process.env.REACT_APP_API_ENDPOINT;

class ApiService extends AxiosInitialize {
  constructor() {
    super(API_URL, true);
  }
}
export default new ApiService();
