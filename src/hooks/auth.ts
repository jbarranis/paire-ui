import { useEffect, useState } from "react";
// import { apiService } from "../services";
// import * as hooks from "../services/api/account/hooks";
import { LoginDto } from "../services/api/account/types";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";
import * as selectors from "../redux/selectors";



export const useProvideAuth = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectors.selectUser);
  const [user, setUser] = useState<any>(null);

  const signin = async (payload: LoginDto) => {
    dispatch(actions.loginUser(payload));
  };

  const signout = () => {
    dispatch(
      actions.logoutUser()
    );
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
