import ActionTypes from '../constants';

const initialState = {
  userInfo: undefined
};

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_USER_INFO:
      return Object.assign({}, state, {
        userInfo: action.data
      });
    default:
      return state;
  }
};
export default user;
