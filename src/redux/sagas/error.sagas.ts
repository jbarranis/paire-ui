import { takeEvery, put, all } from "redux-saga/effects";

import { API } from "../../constants";
import { AlertUIDto, setAlert } from "../slices/alertSlice";
import { Action } from "./sagas.types";
import { logoutApi } from "./account.sagas";

export function* handleErrorApi(action: Action<AlertUIDto>): any {
  const { title, message, status } = action.payload;
  yield put(setAlert({ title, message, status }));
  // TODO: set up expired session?
  // TODO: move status codes to constants
  if (status === 401) {
    yield logoutApi();
  }
  // TODO: log error somewhere
}

export function* watchErrorRequests(): any {
  yield all([yield takeEvery(API.HANDLE_ERROR, handleErrorApi)]);
}
