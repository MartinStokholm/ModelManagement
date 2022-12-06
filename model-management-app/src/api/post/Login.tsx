import { useMutation } from "react-query";
import { request } from "../Utils";
import JwtParser from "../JwtParse";
import useAuth from "../../auth/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import type { AccountLoginDto } from "../../interfaces/Account";

export const login = async (data: AccountLoginDto) => {
  localStorage.setItem("user", data.email);
  localStorage.setItem("pwd", data.password);
  const response = await request({
    url: `account/login`,
    method: "POST",
    data: data,
  });

  return response;
};

export const useLogin = () => {
  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || "/";

  return useMutation(login, {
    onSuccess: (account) => {
      const accessToken = account.data.jwt;
      const roles = JwtParser(account.data.jwt)[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
      ];
      localStorage.setItem("token", account.data.jwt);

      const user = localStorage.getItem("user");
      const pwd = localStorage.getItem("pwd");

      setAuth([user, pwd, roles, accessToken]);
      console.log(user + " has logged in");
    },
    onError: (error) => {
      console.log("logging failed");
      console.log((error as any).message);
    },
    onSettled: () => {
      navigate(from, { replace: true });
    },
  });
};
