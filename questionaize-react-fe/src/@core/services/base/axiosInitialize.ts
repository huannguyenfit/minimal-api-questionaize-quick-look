import axios, { AxiosInstance, AxiosResponse, ResponseType } from 'axios';
import HttpStatus from 'http-status-codes';
import qs from 'qs';
import cookie from 'react-cookies';
import { throwError } from 'rxjs';
import { ToggleMessage } from '@core/models/common/responseMessage';
import i18n from '@core/utils/i18n';
import { toggleLoading, toggleMessage } from '@core/utils/loading/Loading';

export abstract class AxiosInitialize {
  constructor(private baseURL: string) {}

   public clearAllSession() {
    Object.keys(cookie.loadAll()).forEach((item) => {
      cookie.remove(item);
    });

    localStorage.clear();
    sessionStorage.clear();
    // redirect to sign in page
    if (window.location.href.indexOf('/login') === -1) {
      window.location.href = `/login?url=${window.location.pathname + window.location.search}`;
    }
  }

  private getInstance = (
    contentType: string = 'application/json',
    includeToken: boolean = false,
    responseType: ResponseType = 'json'
  ): AxiosInstance => {

    const authData: any = cookie.load('AUTH_DATA');
    if(!authData) {
      this.clearAllSession();
    }
    const instance = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': contentType,
        Authorization: includeToken ? `Bearer ${authData.accessToken}` : undefined,
        'PKHID': includeToken? authData.pkhid ?  authData.pkhid :  '' :  ''
      },
      responseType: responseType,
    });

    instance.interceptors.response.use(
      (response) => {
        //do something
        return response;
      },
      (error) => {
        //Handle exception for your business
        const message = {
          code: 0,
          message: '',
          type: 'error',
        } as ToggleMessage;
        if (error.status === 401) {
          this.clearAllSession();
        } else if (error.statusText == 'Unknown Error') {
          message.code = 'UnknownError';
          message.message = i18n.t('SomethingWentWrong');
        } else {
          if (error.message && error.message === 'Network Error') {
            message.message = 'No internet connection';
            message.code = 'networkError';
          } else if (error.response && error.response.data) {
            message.code = HttpStatus.INTERNAL_SERVER_ERROR;
            if (error.response.data.Errors && error.response.data.Errors.length > 0) {
              error.response.data.Errors.forEach((item: any, index: number) => {
                message.message += index + 1 + '. ' + item.Message + '\n';
                console.log(message.message);
              });
            } else {
              message.message = error.response.data.Message;
            }
          }
        }
        // show error
        toggleMessage({ message: message.message, type: 'error', code: message.code });

        return throwError(error);
      }
    );
    return instance;
  };

  public getAsync<T>(
    url: string,
    params?: { [key: string]: any },
    contentType?: string,
    includeToken?: boolean
  ): Promise<AxiosResponse<T>> {
    return this.getInstance(contentType, includeToken).get(url, {
      params: params,
      paramsSerializer: function (params) {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      },
    });
  }

  public postAsync<T>(url: string, json?: object, contentType?: string, includeToken?: boolean): Promise<AxiosResponse<T>> {
    return this.getInstance(contentType, includeToken).post(url, json);
  }

  public putAsync<T>(url: string, json?: object, contentType?: string, includeToken?: boolean): Promise<AxiosResponse<T>> {
    return this.getInstance(contentType, includeToken).put(url, json);
  }

  public deleteAsync<T>(url: string, contentType?: string, includeToken?: boolean): Promise<AxiosResponse<T>> {
    return this.getInstance(contentType, includeToken).delete(url);
  }
}
