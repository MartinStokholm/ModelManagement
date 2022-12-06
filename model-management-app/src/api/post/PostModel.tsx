import { useMutation } from "react-query";
import { request } from "../Utils";
import type { ModelRegisterDto } from "../../interfaces/Model";

export const register = async (data: ModelRegisterDto) => {
  return await request({
    url: `Models`,
    method: "POST",
    data: data,
  });
};

export const useRegister = () => {
  return useMutation(register, {
    onSuccess: () => {
      console.log("Model has been created");
    },
    onError: (error) => {
      console.log((error as any).message);
    },
  });
};
