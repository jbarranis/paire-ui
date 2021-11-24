import SagaTester from "redux-saga-tester";
import { combineReducers } from "redux";

import { alertReducer } from "../slices/alertSlice";
import * as errorSagas from "./error.sagas";

jest.mock("../../utils/getToken", () => ({
  getToken: () => "fakeToken",
}));

describe("error.sagas", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should call handleErrorApi", async () => {
    const sagaTester = new SagaTester({
      initialState: {
        alert: <any>{},
      },
      reducers: combineReducers({ alert: alertReducer }),
    });
    const payload: any = {
      title: "title",
      message: "message",
      status: 400,
    };
    sagaTester.start(errorSagas.handleErrorApi, { payload });
    await sagaTester.waitFor("alert/setAlert");
    const { data } = sagaTester.getState().alert;
    expect(data.title).toEqual("title");
    expect(data.message).toEqual("message");
    expect(data.status).toEqual(400);
  });
});
