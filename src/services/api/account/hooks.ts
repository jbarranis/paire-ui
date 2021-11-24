import { useQuery } from "react-query";

import * as API from "./routes";

export function useGetUser() {
  return useQuery(['user'], () => API.getUser());
}
