import { Button, Card, InputItem, List } from 'antd-mobile';
import history from '@/routes/history';
import { removeStorage, setStorage } from '@/utils/storage';
import { userLoginApi } from '@/api';

import './index.less';

const LoginForm = () => {
  const loginServer = async () => {
    try {
      const res = await userLoginApi({
        userName: 'chengshuai',
        passwd: '111111'
      });
      console.log(res);
    } catch (error) {
      console.warn(error);
    }
  };
  const login = () => {
    loginServer();
    return;
    // TODO 调整为存储redux
    setStorage('token', 'FAKE_TOKEN');
    history.push('/dashboard');
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
