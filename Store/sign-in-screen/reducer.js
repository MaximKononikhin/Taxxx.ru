import { SWITCH_LOGIN_ERR } from "./actionTypes";

const initialState = {
  isLoginError: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case SWITCH_LOGIN_ERR: {
      return {
        ...state,
        isLoginError: action.payload
      }
    }

    default: return state;
  }
}