import { useEffect, useState } from "react";
import { apiService } from "../services";
import * as hooks from "../services/api/account/hooks";
import { LoginDto } from "../services/api/account/types";


export const useProvideAuth = () => {
  const { data: userInfo } = hooks.useGetUser();
  const [user, setUser] = useState<any>(null);

  const signin = async (payload: LoginDto) => {
    const user = await apiService.account.login({ username: "test", password: "test" });
    setUser(user);
  };

  const signout = async () => {
    await apiService.account.logout();
    setUser(null);
  };

  useEffect(() => {
    setUser(userInfo);
  }, [userInfo]);

  return {
    user,
    signin,
    signout,
  };
};
