import { useQuery, useQueryClient } from "react-query";
import { request } from "./Utils";

const fetchModelJobs = async ({ queryKey }: { queryKey: Array<any> }) => {
  const id = queryKey[1];
  const response = await request({ url: `job/${id}`, method: "get" });
  console.log(response.status);
  if (response.status === 304) {
    throw new Error("Problem fetching data");
  }
  return response;
};

export const GetModelJobs = (id: number) => {
  const queryClient = useQueryClient();
  return useQuery([`modelJobKey`, id], fetchModelJobs, {
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
    refetchInterval: 5000,
  });
};
