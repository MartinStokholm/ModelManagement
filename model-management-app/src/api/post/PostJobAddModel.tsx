import { useMutation, useQueryClient } from "react-query";
import { request } from "../Utils";
import type { JobModelDto } from "../../interfaces/Job";

export const jobAddModel = async (data: JobModelDto) => {
  return await request({
    url: `Jobs/${data.jobId}/model/${data.modelId}`,
    method: "POST",
    data: data,
  });
};

export const useJobAddModel = () => {
  const queryClient = useQueryClient();
  return useMutation(jobAddModel, {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries("jobsKey");
    },
  });
};
