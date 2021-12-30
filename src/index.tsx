import React from 'react'
import ReactDOM from 'react-dom';
import Router from '@/routes/index';
import { Provider } from 'react-redux';
import configureStore from './redux/store/index';
import { ConnectedRouter } from 'connected-react-router'
import history from '@/routes/history';
import '@/style/index.less'

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
