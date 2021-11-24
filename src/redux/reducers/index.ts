import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";

import { alertReducer } from "../slices/alertSlice";
import { userReducer } from "../slices/userSlice";

import { CLEAR_STORE } from "../store/constants";

const appReducer = combineReducers({
  alert: alertReducer,
  user: userReducer,
});

const rootReducer = (state: any, action: any) => {
  const stateOut = action.type === CLEAR_STORE ? undefined : state;
  return appReducer(stateOut, action);
};

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
