import { SWITCH_AUTH_NEED, SWITCH_LOGIN_ERR } from "./actionTypes";

export const switchLoginErr = (flag) => {
  return {
    type: SWITCH_LOGIN_ERR,
    payload: flag
  }
};

export const switchAuthNeed = (flag) => {
  return {
    type: SWITCH_AUTH_NEED,
    payload: flag
  }
};

export const loginUser = (loginInfo, historyPush) => {
  return async (dispatch, getState, api) => {
    try {
      const response = await api.post('/api/login', loginInfo);
      console.log(response);
      dispatch(switchLoginErr(false));
      dispatch(switchAuthNeed(false));
      historyPush();
    }
    catch {
      dispatch(switchLoginErr(true));
    }
  }
}
