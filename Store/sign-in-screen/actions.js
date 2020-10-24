import { SWITCH_LOGIN_ERR } from "./actionTypes";

export const switchLoginErr = (flag) => {
  return {
    type: SWITCH_LOGIN_ERR,
    payload: flag
  }
};

export const loginUser = (loginInfo, historyPush) => {
  return async (dispatch, getState, api) => {
    try {
      const response = await api.post('/api/login', loginInfo);
      console.log(response);
      dispatch(switchLoginErr(false));
      historyPush();
    }
    catch {
      dispatch(switchLoginErr(true));
    }
  }
}
