import SagaTester from "redux-saga-tester";
import { combineReducers } from "redux";

import * as actions from "../actions/account.actions";
import { userReducer } from "../slices/userSlice";
import * as accountSagas from "./account.sagas";

jest.mock("../../utils/getToken", () => ({
  getToken: () => "fakeToken",
}));

jest.mock("../../services/", () => ({
  apiService: {
    account: {
      login: () => ({ data: { token: "1234" } }),
      getUserInfo: () => ({
        data: [{ id: 1, name: "first", last_name: "last" }],
      }),
      getDeliveryMethods: () => ({ data: [{ id: 1 }] }),
      getPaymentMethods: () => ({ data: [{ id: 1 }] }),
    },
  },
}));

describe("account.sagas", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should call loginApi", async () => {
    const sagaTester = new SagaTester({
      initialState: {
        user: <any>{},
        common: <any>{},
      },
      reducers: combineReducers({ user: userReducer }),
    });
    const payload: any = {
      username: "user",
      password: "password",
    };
    sagaTester.start(accountSagas.loginApi, { payload });
    sagaTester.dispatch(actions.loginUser(payload));
    await sagaTester.waitFor("user/login");
    await sagaTester.waitFor("common/saveDeliveryMethods");
    await sagaTester.waitFor("common/savePaymentMethods");
    const { data } = sagaTester.getState().user;
    const { deliveryMethods, paymentMethods } = sagaTester.getState().common;
    expect(data.firstName).toEqual("first");
    expect(data.lastName).toEqual("last");
    expect(deliveryMethods).toEqual([{ id: 1 }]);
    expect(paymentMethods).toEqual([{ id: 1 }]);
  });

  it("should call logoutApi", async () => {
    const sagaTester = new SagaTester({
      initialState: {
        user: <any>{},
      },
      reducers: combineReducers({ user: userReducer }),
    });
    const payload = {
      onSuccess: jest.fn(),
    };
    sagaTester.start(accountSagas.logoutApi, { payload });
    sagaTester.dispatch(actions.logoutUser(payload));
    await sagaTester.waitFor("user/logout");
    const { data } = sagaTester.getState().user;
    expect(data.firstName).toBeUndefined();
  });
});
