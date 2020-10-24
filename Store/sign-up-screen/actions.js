import { SET_USER_NAME, SET_USER_PASSWORD, SET_USER_PHONE, SWITCH_REGISTRATION_ERR } from "./actionTypes";

export const setUserName = (userName) => {
  return {
    type: SET_USER_NAME,
    payload: userName
  }
};

export const setUserPhone = (userPhone) => {
  return {
    type: SET_USER_PHONE,
    payload: userPhone
  }
};

export const setUserPassword = (userPassword) => {
  return {
    type: SET_USER_PASSWORD,
    payload: userPassword
  }
};

export const switchRegisterErr = (flag) => {
  return {
    type: SWITCH_REGISTRATION_ERR,
    payload: flag
  }
};

export const registerUser = (registerInfo, historyPush) => {
  return async (dispatch, getState, api) => {
    try {
      const response = await api.post('/api/register', registerInfo);
      console.log(response);
      historyPush();
      dispatch(switchRegisterErr(false));
    }
    catch {
      dispatch(switchRegisterErr(true));
    }
  }
}