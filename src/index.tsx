import React from 'react'
import ReactDOM from 'react-dom';
import Router from '@/routes/index';
import { Provider } from 'react-redux';
import configureStore from './redux/store/index';
import '@/style/index.less'

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
