import { SWITCH_AUTH_NEED, SWITCH_LOGIN_ERR } from "./actionTypes";

const initialState = {
  isLoginError: false,
  isAuthNeed: true
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case SWITCH_LOGIN_ERR: {
      return {
        ...state,
        isLoginError: action.payload
      }
    }

    case SWITCH_AUTH_NEED: {
      return {
        ...state,
        isAuthNeed: action.payload
      }
    }

    default: return state;
  }
}