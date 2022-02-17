import { Button, Card, InputItem, List, Toast } from 'antd-mobile';
import { useState } from 'react';
import history from '@/routes/history';
import { removeStorage, setStorage } from '@/utils/storage';
import { userLoginApi } from '@/api';

import './index.less';

const LoginForm = () => {
  const [userName, setUserName] = useState('cheng');
  const [passwd, setPasswd] = useState('111111');
  const login = async () => {
    try {
      const { resData } = await userLoginApi({
        name: userName,
        passwd
      });
      setStorage('token', resData.token);
      history.push('/dashboard');
    } catch (error: any) {
      console.warn(error);
      Toast.info(error.msg);
    }
  };
  const logout = () => {
    removeStorage('token');
  };
  return (
    <div className="login-form">
      <List>
        <InputItem value={userName} placeholder="请输入用户名" onChange={e => setUserName(e)} />
        <InputItem value={passwd} type="password" placeholder="请输入密码" onChange={e => setPasswd(e)} />
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
