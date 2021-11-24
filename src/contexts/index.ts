import { useContext, createContext } from "react";

const authContext = createContext({} as any);

export function useAuth() {
  return useContext(authContext);
}

export const contexts = {
  authContext,
};
