import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDto } from "../../mappers/account";

const initialState = {
  data: {} as UserDto,
};

const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, { payload }: PayloadAction<UserDto>) {
      state.data = payload;
    },
    logout() {
      return initialState;
    },
  },
});

export const { login, logout } = actions;

export { reducer as userReducer };
