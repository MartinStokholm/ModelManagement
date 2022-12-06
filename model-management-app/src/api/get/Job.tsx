import { useQuery, useQueryClient } from "react-query";
import { request } from "../Utils";

const fetchJob = async ({ queryKey }: { queryKey: Array<any> }) => {
  const id = queryKey[1];
  const response = await request({ url: `jobs/${id}`, method: "get" });
  if (response.status === 304) {
    throw new Error("Problem fetching data");
  }

  return response;
};

export const GetJob = (id: number) => {
  const queryClient = useQueryClient();
  return useQuery([`jobKey`, id], fetchJob, {
    initialData: () => {
      const job = queryClient
        .getQueriesData("jobsKey")
        ?.find((job: any) => job.id === id);

      if (job) {
        return { data: job };
      } else {
        return undefined;
      }
    },
    refetchOnWindowFocus: false,
  });
};
