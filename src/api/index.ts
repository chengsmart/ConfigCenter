import { getData, postData } from '@/utils/request';
import { Ipaging } from './interface';

const URL = {
  login: `/api/auth`,
  register: `/api/auth/register`,
  config: `/api/config`,
  configList: `/api/config/list`
};

interface Ilogin {
  name: string;
  passwd: string;
}

export const userLoginApi = (data: Ilogin): Promise<any> => {
  return postData({
    url: URL.login,
    data
  });
};

interface IgetConfigList extends Ipaging {
  source: 'ios' | 'android' | 'miniapp';
}

export const getConfigListApi = (data: IgetConfigList): Promise<any> => {
  return getData({
    url: URL.configList + `?source=${data.source}`,
    data
  });
};

interface IcreateConfigApi {
  source: 'ios' | 'android' | 'miniapp';
  key: string;
  state: 0 | 1;
}
export const createConfigApi = (data: IcreateConfigApi): Promise<any> => {
  return postData({
    url: URL.config,
    data
  });
};
