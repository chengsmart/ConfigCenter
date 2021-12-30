import ActionTypes from "../constants";

export const setUserInfo = (data:any) => ({
  type: ActionTypes.SET_USER_INFO,
  data,
});
