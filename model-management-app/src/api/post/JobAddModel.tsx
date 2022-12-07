import { useMutation, useQueryClient } from "react-query";
import { request } from "../Utils";
import type { JobModelDto } from "../../interfaces/Job";

export const register = async (data: JobModelDto) => {
  return await request({
    url: `Jobs/${data.jobId}/model/${data.modelId}`,
    method: "POST",
    data: data,
  });
};

export const useJobAddModel = () => {
  const queryClient = useQueryClient();
  return useMutation(register, {
    onSuccess: () => {},
    onError: (error) => {
      console.log((error as any).message);
    },
    onSettled: () => {
      queryClient.invalidateQueries("jobsKey");
    },
  });
};
