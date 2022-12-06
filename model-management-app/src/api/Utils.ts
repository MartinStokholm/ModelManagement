import axios from "axios";
import { server } from "../config/Config";

const client = axios.create({ baseURL: server });

const getToken = () => {
  return localStorage.getItem("token");
};

export const request = ({ ...options }) => {
  client.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
  const onSuccess = (response: any) => {
    return response;
  };
  const onError = (error: any) => {
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};

export const SetupInterceptors = () => {
  client.interceptors.response.use(
    function (response) {
      return response;
    },
    (error) => {
      var status = error.response.status;
      if (status === 401) {
      }
      return error;
    }
  );
};
