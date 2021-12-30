import {  Redirect, Switch } from "react-router-dom";
import RouteWithSubRoutes from "@/components/util/routeWithSubRoutes";
import { LoadableComponent } from "@/components/util/loadable-component";
import Home from '@/routes/home/index'
import Detail from '@/routes/detail/index'
const routes = [
  {
    exact: true, // 是否是默认
    path: "/",
    component: () => <Redirect to="/home" />,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/detail",
    component:Detail,
  },
];

export default () => (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
);
