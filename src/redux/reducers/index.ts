import { combineReducers } from 'redux';
import { createReduxHistoryContext, reachify } from "redux-first-history";
import history,{routerReducer} from '@/routes/history';
import user from './user';

export default  combineReducers({
  // router: routerReducer,
  user,
})