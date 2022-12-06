import axios from "axios";
import { server } from "../Config/config";
import { useNavigate } from "react-router-dom";

const client = axios.create({ baseURL: server });

const getToken = () => {
  return localStorage.getItem("token");
};

export const SetupInterceptors = () => {
  //let navigate = useNavigate();

  client.interceptors.response.use(
    function (response) {
      return response;
    },
    (error) => {
      var status = error.response.status;
      if (status === 401) {
        //return navigate("/");
      }
      return error;
    }
  );
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
