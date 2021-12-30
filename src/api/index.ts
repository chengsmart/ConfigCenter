import { getData, postData } from '@/utils/request';
import { Ipaging } from './interface';

const apiVersion = import.meta.env.VITE_API_VERSION;

const URL = {
  login: `/mapi/auth/${apiVersion}/login`,
  getConfigList: `/mapi/auth/${apiVersion}/getConfigList`
};

interface Ilogin {
  userName: string;
  passwd: string;
}

export const userLoginApi = (data: Ilogin): Promise<any> => {
  return postData({
    url: URL.login,
    data
  });
};

interface IgetConfigList extends Ipaging {
  source: string;
}

export const getConfigListApi = (data: IgetConfigList): Promise<any> => {
  return getData({
    url: URL.getConfigList,
    data
  });
};
