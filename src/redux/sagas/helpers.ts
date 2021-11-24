import { API } from "../../constants";
import { handleErrorApi } from "./error.sagas";

export function* handleError(title: string, e: any): any {
  yield handleErrorApi({
    type: API.HANDLE_ERROR,
    payload: {
      title,
      message: e.message,
      status: e.status,
    },
  });
}
