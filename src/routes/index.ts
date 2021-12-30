import { matchRoutes, renderRoutes,RouteConfig } from "react-router-config";
import Home from '@/routes/home/index';
import Dashboard from '@/routes/dashboard/index';
import Login from '@/routes/login/index';
import ErrorPage from '@/routes/error-page/index';


const routes: RouteConfig = [
  {
      path: '/',
      component: Home,
      exact: true,
      routes: [
          {
              path: '/dashboard',
              component: Dashboard
          },
      ]
  },
  {
      path: '/login',
      component: Login,
  },
  {
      path: '/*',
      component: ErrorPage,
  }
]
export default routes;