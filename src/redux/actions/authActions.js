// authActions.js
import * as actionTypes from "../authActionTypes";

export const loginSuccess = (userData) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: userData.user,
  };
};

export const loginFailure = () => {
  return {
    type: actionTypes.LOGIN_FAILURE,
  };
};

export const login = (formData) => {
  return async (dispatch) => {
    const apiUrl = "https://indigo-indri-slip.cyclic.app/users/login";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const userData = await response.json(); // Parse the response data
        dispatch(loginSuccess(userData)); // Dispatch the loginSuccess action with the user data
      } else {
        dispatch(loginFailure());
      }
    } catch (error) {
      console.error("Error:", error);
      dispatch(loginFailure());
    }
  };
};
