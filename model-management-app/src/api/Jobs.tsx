// import type { JobRegisterDto } from "../../interfaces/Job";
import { useQuery } from "react-query";
import { request } from "./Utils";

const fetchAllJobs = async () => {
  console.log("Fetching");
  const response = await request({ url: "jobs", method: "get" });
  console.log(response.status);
  if (response.status === 304) {
    throw new Error("Problem fetching data");
  }
  console.log("This is fetching", console.log(response));
  return response;
};

const GetJobList = () => {
  return useQuery("jobsKey", fetchAllJobs, {
    refetchOnWindowFocus: false,
  });
};

export default GetJobList;
