import axios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import qs from 'qs';
import { Toast } from 'antd-mobile';
import { getSession, getStorage } from './storage';

const baseURL = import.meta.env.VITE_API_URL;
const httpClient: AxiosInstance = axios.create({
  baseURL,
  timeout: 20000
});

/**
 * @description 通用axios 封装
 * @template T
 * @param {string} method
 * @param {string} url
 * @param {object} [queryParams]
 * @param {object} [body]
 * @returns {AxiosPromise<T>}
 */
const makeRequest = <T>(method: string, url: string, queryParams?: object, body?: object): AxiosPromise<T> => {
  let request: AxiosPromise<T>;
  switch (method) {
    case 'GET':
      request = httpClient.get<T>(url, { params: queryParams });
      break;
    case 'POST':
      request = httpClient.post<T>(url, body, { params: queryParams });
      break;
    case 'PUT':
      request = httpClient.put<T>(url, body, { params: queryParams });
      break;
    case 'PATCH':
      request = httpClient.patch<T>(url, body, { params: queryParams });
      break;
    case 'DELETE':
      request = httpClient.delete(url, { params: queryParams });
      break;

    default:
      throw new Error('Method not supported');
  }

  return new Promise((resolve, reject) => {
    request
      .then((response: any) => {
        const result: any = response.data.data;
        if (result.resCode === '0') {
          // 此处处理不同状态逻辑 例如 ajax 的登录拦截
          resolve(response.data.data);
        } else if (result.resCode === 400001) {
          window.location.href = '/login.html';
          // window.location.href = `/m/login?redirectURL=${encodeURIComponent(window.location.href)}`;
        } else {
          reject(response.data.data);
        }
      })
      .catch((err: Error) => {
        reject(err);
      });
  });
};
/**
 * @description get 方式发出请求
 * @param {*} config
 * @returns {AxiosPromise<any>}
 */
export const getData = async (config: any): Promise<any> => {
  const data = config.data || {};
  // eslint-disable-next-line no-param-reassign
  /*  config.data = qs.stringify({
    data: JSON.stringify(data),
  }) */
  // eslint-disable-next-line no-param-reassign
  config.data = qs.stringify(data);
  const token = getStorage('token');
  const newConfig: AxiosRequestConfig = {
    method: 'get', // default
    baseURL,
    headers: token ? { token } : '',
    responseType: 'json',
    responseEncoding: 'utf8',
    timeout: 50000,
    ...config
  };
  const request: AxiosPromise = httpClient.request(newConfig);

  return new Promise((resolve, reject) => {
    request
      .then(response => {
        const result: any = response.data.data;

        // TODO 整理接口返回格式
        if (Number(result.resCode) === 0) {
          // 此处处理不同状态逻辑 例如 ajax 的登录拦截
          resolve(response.data.data);
        } else if (Number(result.resCode) === 400001) {
          // TODO 未登录处理
          // login();
        } else {
          reject(response.data.data);
        }
      })
      .catch((err: Error) => {
        console.log(`${err}`);
        Toast.info('服务请求失败, 请稍后再试!');
        reject();
      });
  });
};

/**
 * @description post 方式发送请求
 * @param {*} config
 * @returns {Promise<{ re: any }>}
 */
export const postData = async (config: any): Promise<{ re: any }> => {
  const data = config.data || {};

  /*  config.data = qs.stringify({
    data: JSON.stringify(data),
  }) */
  // eslint-disable-next-line no-param-reassign
  // config.data = qs.stringify(data);

  const token = getStorage('token');
  const newConfig: AxiosRequestConfig = {
    method: 'post', // default
    baseURL,
    headers: token ? { token } : '',
    responseType: 'json',
    responseEncoding: 'utf8',
    timeout: 50000,
    ...config
  };

  const request: AxiosPromise = httpClient.request(newConfig);

  return new Promise((resolve, reject) => {
    request
      .then(response => {
        const result: any = response.data.data;
        if (Number(result.resCode) === 0) {
          // TODO 整理接口返回格式
          resolve(response.data.data);
        } else if (Number(result.resCode) === 400001) {
          // TODO 未登录处理
          // login();
        } else {
          reject(response.data.data);
        }
      })
      .catch((err: Error) => {
        console.log(`${err}`);
        Toast.info('服务请求失败, 请稍后再试!');
        reject();
      });
  });

  // return axios.request(newConfig);
};

export const get = <T>(url: string, queryParams?: object): Promise<unknown> => {
  return makeRequest<T>('GET', url, queryParams);
};

export const post = <T>(url: string, body: object, queryParams?: object): Promise<unknown> => {
  const data: any = qs.stringify(body);
  return makeRequest<T>('POST', url, queryParams, data);
};

export const put =
  () =>
  <T>(url: string, body: object, queryParams?: object): Promise<unknown> => {
    return makeRequest<T>('PUT', url, queryParams, body);
  };

export const patch =
  () =>
  <T>(url: string, body: object, queryParams?: object): Promise<unknown> => {
    return makeRequest<T>('PATCH', url, queryParams, body);
  };

export const deleteQeust = (url: string, queryParams?: object): Promise<any> => {
  return makeRequest('DELETE', url, queryParams);
};
