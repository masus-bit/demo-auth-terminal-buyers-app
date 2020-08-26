import axios from "axios";
import { ActionCreator } from "../src/components/reducers/action-creator.js";
const TIMEOUT = 5000;

export const createApi = (dispatch) => {
  const api = axios.create({
    baseURL: "https://api.github.com/users",
    timeout: TIMEOUT,
    withCredentials: false,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === 400) {
      dispatch(ActionCreator.auth(false));
      alert("Для продолжения необходимо авторизоваться");
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createApi;
