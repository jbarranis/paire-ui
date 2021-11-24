import { takeEvery, put, all } from "redux-saga/effects";

import { apiService } from "../../services/";
import { login, logout } from "../slices/userSlice";
import * as AT from "../actions";
import { API } from "../../constants";
import { Action } from "./sagas.types";
import { handleError } from "./helpers";
import { User, UserDto } from "../../mappers/account";
import { mapper } from "../../mappers/mapper";

const { account } = apiService;

// TODO - hook up real APIs
export function* getUserInfoApi(): any {
  try {
    // const response = yield account.getUser();
    // const [user] = response.data as User[];
    const user = { first_name: "Test", last_name: "User", email: "", id: 1 };
    const mapped = mapper.map(user, UserDto, User);
    yield put(login(mapped));
  } catch (e) {
    yield handleError("Get User Error", e);
  }
}

export function* logoutApi(): any {
  try {
    // yield account.logout();
  } catch (e) {
    yield handleError("Logout Error", e);
  } finally {
    console.log("OUT")
    yield put(logout());
  }
}

export function* loginApi(action: Action<AT.LoginPostDto>): any {
  try {
    // const { payload } = action;
    // yield account.login(payload);
    yield getUserInfoApi();
  } catch (e) {
    yield handleError("Login Error", e);
  }
}

export function* watchUserRequests(): any {
  yield all([
    yield takeEvery(API.GET_USER_INFO, getUserInfoApi),
    yield takeEvery(API.LOGOUT, logoutApi),
    yield takeEvery(API.LOGIN, loginApi),
  ]);
}
