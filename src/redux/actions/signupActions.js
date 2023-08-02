// signupActions.js
import * as actionTypes from "../signupActionTypes";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const signupSuccess = () => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
  };
};

export const signupFailure = () => {
  return {
    type: actionTypes.SIGNUP_FAILURE,
  };
};

export const signup = (formData) => {
  return async (dispatch) => {
    const apiUrl = "https://indigo-indri-slip.cyclic.app/users/signup";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        dispatch(signupSuccess());
      } else {
        dispatch(signupFailure());
      }
    } catch (error) {
      console.error("Error:", error);
      dispatch(signupFailure());
      toast.error(
        error.message || "An error occurred. Please try again later."
      );
    }
  };
};
