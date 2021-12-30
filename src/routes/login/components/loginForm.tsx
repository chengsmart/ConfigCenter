import { Button, Card, InputItem, List } from 'antd-mobile';
import history from '@/routes/history';
import './index.less';
import { removeStorage, setStorage } from '@/utils/storage';
const LoginForm = () => {
  const login = () => {
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
