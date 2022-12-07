import { useMutation } from "react-query";
import { request } from "../Utils";
import type { JobModelDto } from "../../interfaces/Job";

export const register = async (data: JobModelDto) => {
  return await request({
    url: `Jobs/${data.jobId}/model/${data.modelId}`,
    method: "DELETE",
    data: data,
  });
};

export const useJobRemoveModel = () => {
  return useMutation(register, {
    onSuccess: () => {},
    onError: (error) => {},
  });
};
