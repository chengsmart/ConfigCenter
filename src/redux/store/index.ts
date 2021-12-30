import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {routerMiddleware} from '@/routes/history';
import rootReducer from '../reducers'

const middlewares:Array<any> = [];

export default function configureStore(initialState?:any ) {


  const store = createStore(
    rootReducer,

    // composeWithDevTools(
    //   applyMiddleware(routerMiddleware)
    // ),
    initialState,
    // composeEnhancers(applyMiddleware(...middlewares))
  );

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     const nextRootReducer = require('../reducers').default;//eslint-disable-line
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }
  return store;
}
