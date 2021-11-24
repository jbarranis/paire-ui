import { contexts } from "../../contexts";
import { useProvideAuth } from "../../hooks/auth";

export const AuthProvider = ({ children }: any) => {
  const auth = useProvideAuth();
  const { authContext } = contexts;

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};
