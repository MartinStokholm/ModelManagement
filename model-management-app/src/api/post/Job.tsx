import { useMutation } from "react-query";
import { request } from "../Utils";
import type { JobRegisterDto } from "../../interfaces/Job";

export const register = async (data: JobRegisterDto) => {
  return await request({
    url: `Jobs`,
    method: "POST",
    data: data,
  });
};

export const useRegister = () => {
  return useMutation(register, {
    onSuccess: () => {
      console.log("Job added");
    },
    onError: (error) => {
      console.log((error as any).message);
    },
  });
};
