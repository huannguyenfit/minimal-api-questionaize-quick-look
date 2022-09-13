import axios, { AxiosInstance, AxiosResponse, ResponseType } from 'axios';
import HttpStatus from 'http-status-codes';
import qs from 'qs';
import cookie from 'react-cookies';
import {  throwError } from 'rxjs';
import API_URL from '../constants/routeConfig';
import { ToggleMessage } from '../models/common/responseMessage';
import i18n from './i18n';
import { toggleLoading, toggleMessage } from './loading/Loading';
const axiosInstance = (
  handleErrorAutomatic: boolean,
  successMessage?: string,
  contentType: string = 'application/json',
  responseType: ResponseType = 'json',
  isShowLoading: boolean = true,
  isShowMessage: boolean = true
): AxiosInstance => {
  if (isShowLoading) toggleLoading(true);

  const instance = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': contentType,
      Authorization: `Bearer ${cookie.load('ACCESS_TOKEN')}`,
    },
    responseType: responseType,
  });

  instance.interceptors.response.use(
    (response) => {
      if (isShowLoading) toggleLoading(false);

      const method = response.config.method;

      (method === 'post' || method === 'put' || method === 'delete') &&
        isShowMessage &&
        toggleMessage({
          message: successMessage ? successMessage : 'requestSuccessful',
          type: 'success',
        });
      return response;
    },
    (error) => {
      //Handle exception for your business
      const message = {
        code: 0,
        message: '',
        type: 'error',
      } as ToggleMessage;
      if (isShowLoading) toggleLoading(false);
      if (error.status === 401) {
        handleUnAuthorize();
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
              console.log(message.message)
            });
          } else {
            message.message = error.response.data.Message;
          }
        }
      }
      // show error
      if (handleErrorAutomatic) {
        toggleMessage({ message: message.message, type: 'error', code: message.code });
      }

      return throwError(error);
    }
  );
  return instance;
};

export const getAsync = (
  url: string,
  params?: { [key: string]: any },
  isShowLoading: boolean = true,
  isShowMessage: boolean = true,
  handleErrorAutomatic: boolean = true
): Promise<AxiosResponse> => {
  return axiosInstance(handleErrorAutomatic, undefined, 'application/json', 'json', isShowLoading, isShowMessage).get(url, {
    params: params,
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: 'repeat' });
    },
  })
};

export const getFileAsync = (
  url: string,
  params?: { [key: string]: any },
  isShowLoading: boolean = true,
  isShowMessage: boolean = true,
  handleErrorAutomatic: boolean = true
): Promise<AxiosResponse> => {
  return axiosInstance(handleErrorAutomatic, undefined, 'application/json', 'blob', isShowLoading, isShowMessage).get(url, {
    params: params,
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: 'repeat' });
    },
  });
};

export const postAsync = (
  url: string,
  json?: object,
  successMessage?: string,
  isShowLoading: boolean = true,
  isShowMessage: boolean = true,
  handleErrorAutomatic: boolean = true
): Promise<AxiosResponse> => {
  return axiosInstance(handleErrorAutomatic, successMessage, 'application/json', 'json', isShowLoading, isShowMessage).post(url, json)
};

export const postXFormAsync = (
  url: string,
  json?: any,
  successMessage?: string,
  isShowLoading: boolean = true,
  isShowMessage: boolean = true,
  handleErrorAutomatic: boolean = true
): Promise<AxiosResponse> => {
  return axiosInstance(handleErrorAutomatic, successMessage, 'application/x-www-form-urlencoded', 'json', isShowLoading, isShowMessage
  ).post(url, json)
};

export const putAsync = (
  url: string,
  json?: object,
  successMessage?: string,
  isShowLoading: boolean = true,
  isShowMessage: boolean = true,
  handleErrorAutomatic: boolean = true
): Promise<AxiosResponse> => {
  return axiosInstance(handleErrorAutomatic, successMessage, 'application/json', 'json', isShowLoading, isShowMessage)
    .put(url, json)

};

export const deleteAsync = (
  url: string,
  successMessage?: string,
  isShowLoading: boolean = true,
  isShowMessage: boolean = true,
  handleErrorAutomatic: boolean = true
): Promise<AxiosResponse> => {
  return axiosInstance(handleErrorAutomatic, successMessage, 'application/json', 'json', isShowLoading, isShowMessage).delete(url)

};

export const postWithUrlencoded = (
  url: string,
  model?: any,
  successMessage?: string,
  isShowLoading: boolean = true,
  isShowMessage: boolean = true
) => {
  axios.defaults.withCredentials = true;
  return axiosInstance(true, successMessage, 'application/x-www-form-urlencoded', 'json', isShowLoading, isShowMessage).post(
    url,
    model,
    {
      headers: { 'content-Type': 'application/x-www-form-urlencoded' },
    }
  );
};

export const postFormDataAsync = (
  url: string,
  json?: any,
  successMessage?: string,
  isShowLoading: boolean = true,
  isShowMessage: boolean = true,
  handleErrorAutomatic: boolean = true
): Promise<AxiosResponse> => {
  return axiosInstance(handleErrorAutomatic, successMessage, 'multipart/form-data', 'json', isShowLoading, isShowMessage).post(
    url,
    parseFormdata(json)
  );
};

export const putFormDataAsync = (
  url: string,
  json?: any,
  successMessage?: string,
  isShowLoading: boolean = true,
  isShowMessage: boolean = true,
  handleErrorAutomatic: boolean = true
): Promise<AxiosResponse> => {
  return axiosInstance(handleErrorAutomatic, successMessage, 'multipart/form-data', 'json', isShowLoading, isShowMessage).put(
    url,
    parseFormdata(json)
  );
};

export const downloadAsync = (url: string, params?: object): Promise<AxiosResponse> => {
  // const instance = axios.create({
  //   baseURL: process.env.REACT_APP_API_ENDPOINT,
  //   responseType: 'blob',
  //   withCredentials: true,
  // });
  // return instance.get(url);
  return axiosInstance(true, undefined, 'application/json', 'blob', true, false).get(url, { params });
};

const parseFormdata = (model: any) => {
  const formdata = new FormData();
  Object.keys(model || {}).forEach((p) => {
    if (model[p]) {
      if (Array.isArray(model[p])) {
        (model[p] as Array<any>).forEach((q) => {
          formdata.append(p + '[]', q);
        });
      } else {
        formdata.append(p, model[p]);
      }
    }
  });

  return formdata;
};

function handleUnAuthorize() {
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
