// signupReducer.js
import * as actionTypes from "../signupActionTypes";

const initialState = {
  isSignupSuccessful: false,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isSignupSuccessful: true,
      };
    case actionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        isSignupSuccessful: false,
      };
    default:
      return state;
  }
};

export default signupReducer;
