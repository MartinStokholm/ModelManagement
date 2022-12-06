import { useMutation } from "react-query";
import { request } from "../Utils";
import type { ManagerRegisterDto } from "../../interfaces/Manager";

export const register = async (data: ManagerRegisterDto) => {
  return await request({
    url: `Managers`,
    method: "POST",
    data: data,
  });
};

export const useRegister = () => {
  return useMutation(register, {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error.message);
    },
  });
};
