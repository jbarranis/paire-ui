import Axios from "axios";

export function configure(baseUrl = "") {
  Axios.defaults.baseURL = baseUrl;
}

export * from "./account";
