import { Button, Card, InputItem, List } from 'antd-mobile';
import history from '@/routes/history';
import { removeStorage, setStorage } from '@/utils/storage';
import { userLoginApi } from '@/api';

import './index.less';

const LoginForm = () => {
  const login = async () => {
    try {
      const { resData } = await userLoginApi({
        userName: 'chengshuai',
        passwd: '111111'
      });
      console.log(resData);
      setStorage('token', resData.token);
      history.push('/dashboard');
    } catch (error) {
      console.warn(error);
    }
  };
  const logout = () => {
    removeStorage('token');
  };
  return (
    <div className="login-form">
      <List>
        <InputItem placeholder="请输入用户名" />
        <InputItem type="password" placeholder="请输入密码" />
      </List>
      <Button type="primary" className="login-btn" onClick={login}>
        登录
      </Button>
      <Button type="primary" className="login-btn" onClick={logout}>
        test 清空登录信息
      </Button>
    </div>
  );
};
export default LoginForm;
