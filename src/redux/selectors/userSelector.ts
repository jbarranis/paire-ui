import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store/types";

const userSelector = (state: RootState) => state.user;

export const selectUser = createSelector(userSelector, ({ data }) => data);

export const selectUserId = createSelector(userSelector, ({ data }) => data.id);
