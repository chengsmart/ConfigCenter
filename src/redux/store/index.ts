import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { routerMiddleware } from 'connected-react-router'
import history from '@/routes/history';

import createRootReducer from '../reducers'

const middlewares:Array<any> = [];

export default function configureStore(initialState?:any ) {
  middlewares.push(routerMiddleware(history))
  const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
  });

  const store = createStore(
    createRootReducer(history),
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
      ),
    ),
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
