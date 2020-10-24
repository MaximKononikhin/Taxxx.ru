import { HYDRATE } from "next-redux-wrapper";
import { SET_USER_NAME, SET_USER_PASSWORD, SET_USER_PHONE, SWITCH_REGISTRATION_ERR, TEST_POSTS } from "./actionTypes";

const initialState = {
  userName: '',
  userPhone: '',
  userPassword: '',
  testPosts: [],
  isRegistrationErr: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload};

    case SET_USER_NAME:
      return {
        ...state,
        userName: action.payload
      }
    
    case SET_USER_PHONE:
      return {
        ...state,
        userPhone: action.payload
      }
    
    case SET_USER_PASSWORD:
      return {
        ...state,
        userPassword: action.payload
      }

    case SWITCH_REGISTRATION_ERR: {
      return {
        ...state,
        isRegistrationErr: action.payload
      }
    }
    
    default: return state;
  }
}