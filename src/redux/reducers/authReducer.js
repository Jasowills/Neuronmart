import * as actionTypes from "../authActionTypes";

const initialState = {
  isLoggedIn: false,
  firstname: "",
  email: "",
  lastname: "",
  userId: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      const userData = action.payload;
      console.log(userData);
      // Check if action.payload exists and has user data
      if (userData) {
        return {
          ...state,
          isLoggedIn: true,
          firstname: userData.firstName, // Access firstname directly
          email: userData.email, // Access email directly
          lastname: userData.lastName, // Access lastname directly
          userId: userData._id,
        };
      }
      return state; // Return the original state if user data is not available
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
