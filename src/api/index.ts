import { getData, postData } from '@/utils/request';
import { Ipaging } from './interface';

const URL = {
  login: `/api/auth`,
  register: `/api/auth/register`,
  config: `/api/config/list`
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
  source: string;
}

export const getConfigListApi = (data: IgetConfigList): Promise<any> => {
  return getData({
    url: URL.config,
    data
  });
};
