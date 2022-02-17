import { RouteConfig } from 'react-router-config';
import Home from '@/routes/home/index';
import Dashboard from '@/routes/dashboard/index';
import Login from '@/routes/login/index';
import ErrorPage from '@/routes/error-page/index';

const routes: RouteConfig = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/dashboard',
    component: Dashboard,
    requiresAuth: false
  },
  {
    path: '/home',
    component: Home,
    requiresAuth: true
  },
  {
    path: '/*',
    component: ErrorPage
  }
];
export default routes;
