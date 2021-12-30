import { useState } from 'react';
import { renderRoutes } from 'react-router-config';
import LoginForm from './components/loginForm';
import Logo from './components/logo';
import './index.less';

const Login = props => {
  const { route } = props;
  console.log(import.meta.env.VITE_API_URL);
  console.log(import.meta);

  return (
    <div className="detail">
      <Logo />
      <LoginForm />
      {route && renderRoutes(route.routes)}
    </div>
  );
};

export default Login;
