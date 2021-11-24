// import Axios from "axios";

// TEMP MOCK
let isLoggedIn = false;
const user = { id: 1, first_name: "Test", last_name: "User", email: "test@user.com" };
const Axios = {
  get: (a: any, b: any) => {
    if (isLoggedIn) {
      return user;
    };
    return null;
  },
  post: (a: any, b: any, c: any) => {
    isLoggedIn = a === "/login";
    if (isLoggedIn) return user;
    return null;
  },
}

const getGenericHeaders = () => ({
  Accept: "application/json",
  "Content-Type": "application/json",
});

async function get(url: string, config?: any) {
  const configs = {
    headers: getGenericHeaders(),
    ...config,
  }
  return await Axios.get(url, configs);
}

async function post(url: string, data?: any, config?: any) {
  const configs = {
    headers: getGenericHeaders(),
    ...config,
  }
  return await Axios.post(url, data, configs);
}

export const api = {
  get,
  post,
};
