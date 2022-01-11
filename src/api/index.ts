import { getData, postData } from '@/utils/request';
import { Ipaging } from './interface';

const URL = {
  login: `/api/auth`,
  register: `/api/auth/register`
};

interface Ilogin {
  userName: string;
  passwd: string;
}

export const userLoginApi = (data: Ilogin): Promise<any> => {
  return getData({
    url: URL.login,
    data
  });
};

interface IgetConfigList extends Ipaging {
  source: string;
}

export const getConfigListApi = (data: IgetConfigList): Promise<any> => {
  return postData({
    url: URL.register,
    data
  });
};
