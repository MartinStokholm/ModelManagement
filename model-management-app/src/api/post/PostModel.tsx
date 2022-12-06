import { useMutation } from "react-query";
import { request } from "../Utils";
import type { ModelRegisterDto } from "../../interfaces/Model";

export const postModel = async (data: ModelRegisterDto) => {
  return await request({
    url: `Models`,
    method: "POST",
    data: data,
  });
};

export const usePostModel = () => {
  return useMutation(postModel, {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error.message);
    },
  });
};
