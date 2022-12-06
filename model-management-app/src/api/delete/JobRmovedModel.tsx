import { useMutation } from "react-query";
import { request } from "../Utils";
import type { JobModelDto } from "../../interfaces/Job";

export const jobDeleteModel = async (data: JobModelDto) => {
  return await request({
    url: `Jobs/${data.jobId}/model/${data.modelId}`,
    method: "DELETE",
    data: data,
  });
};

export const useJobDeleteModel = () => {
  return useMutation(jobDeleteModel, {
    onSuccess: () => {},
    onError: (error) => {},
  });
};
