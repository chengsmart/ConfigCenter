// import { createHashHistory } from 'history';
import { createReduxHistoryContext, reachify } from "redux-first-history";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory()

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({ 
  history,
});

export default history;
export { createReduxHistory, routerMiddleware, routerReducer } 
