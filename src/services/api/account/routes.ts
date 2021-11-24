

import { api } from "../api";
import * as T from "./types";

export const login = async (data: T.LoginDto) => {
  return await api.post("/login", data);
};

export const logout = async () => {
  return await api.post("/logout");
};

export const getUser = async () => {
  return await api.get("/user");
};
