import React from 'react';
import ReactDOM from 'react-dom';
import BaseRouter from '@/routes/index';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from '@/redux/store/index';
import history from '@/routes/history';
import routes from './routes/index';
import renderRoutes from './components/render-routes';
import 'amfe-flexible/index.js';
import './style/index.less';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="main-container">{renderRoutes(routes)}</div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
