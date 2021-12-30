import { getStorage } from '@/utils/storage';
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
const renderRoutes = (routes, extraProps = {}, switchProps = {}) => {
  const token = getStorage('token');
  const whiteList = ['/login'];
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props => {
            // 需要登录，并且没有token，且不在白名单
            if (!!route.requiresAuth && !token && !whiteList.includes(route.path)) {
              return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
            }
            return <route.component {...props} {...extraProps} route={route} />;
          }}
        />
      ))}
    </Switch>
  ) : null;
};
export default renderRoutes;
