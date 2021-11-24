import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AlertUIDto {
  title?: string;
  message: string;
  status: number;
}

const initialState = {
  data: {} as AlertUIDto,
};

const { actions, reducer } = createSlice({
  name: "alert",
  initialState: initialState,
  reducers: {
    clearAlert() {
      return initialState;
    },
    setAlert(state, { payload }: PayloadAction<AlertUIDto>) {
      state.data = payload;
    },
  },
});

export const { clearAlert, setAlert } = actions;

export { reducer as alertReducer };
