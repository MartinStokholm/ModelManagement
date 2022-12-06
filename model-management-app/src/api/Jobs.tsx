import { useQuery } from "react-query";
import { request } from "./Utils";

const fetchAllJobs = async () => {
  const response = await request({ url: "jobs", method: "get" });
  if (response.status === 304) {
    throw new Error("Problem fetching data");
  }
  return response;
};

const GetJobList = () => {
  return useQuery("jobsKey", fetchAllJobs, {
    refetchOnWindowFocus: false,
  });
};

export default GetJobList;
