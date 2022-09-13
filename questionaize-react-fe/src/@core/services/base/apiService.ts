import { API_URL } from '@core/constants/routeConfig';
import { AxiosInitialize } from './axiosInitialize';

class ApiService extends AxiosInitialize {
  constructor() {
    super(API_URL);
  }
}
export default new ApiService();
