import { combineReducers } from "redux";
import authReducer from './authReducer'
import signupReducer from "./signupReducer";
// Define your root reducer
const rootReducer = combineReducers({
  authReducer,
  signupReducer,
});

export default rootReducer;
