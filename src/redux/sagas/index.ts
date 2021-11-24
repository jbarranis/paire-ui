import { all } from "redux-saga/effects";

import { watchUserRequests } from "./account.sagas";
import { watchErrorRequests } from "./error.sagas";

export default function* rootSaga() {
  yield all([
    watchUserRequests(),
    watchErrorRequests(),
  ]);
}
