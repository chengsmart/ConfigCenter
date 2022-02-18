import { RouteConfig } from 'react-router-config';
import Create from '@/routes/create/index';
import Dashboard from '@/routes/dashboard/index';
import Login from '@/routes/login/index';
import ErrorPage from '@/routes/error-page/index';

const routes: RouteConfig = [
  {
    path: '/',
    exact: true,
    component: Dashboard
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/dashboard',
    component: Dashboard,
    requiresAuth: true
  },
  {
    path: '/create',
    component: Create,
    requiresAuth: true
  },
  {
    path: '/*',
    component: ErrorPage
  }
];
export default routes;
