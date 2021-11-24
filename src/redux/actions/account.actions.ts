import { API } from "../../constants";

export interface LoginPostDto {
  username: string;
  password: string;
}

export const loginUser = (payload: LoginPostDto) => ({
  type: API.LOGIN,
  payload,
});

export const logoutUser = () => ({
  type: API.LOGOUT,
});

export const getUserInfo = () => ({
  type: API.GET_USER_INFO,
});
