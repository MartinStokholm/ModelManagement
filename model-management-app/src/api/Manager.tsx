// import type { JobRegisterDto } from "../../interfaces/Job";
import { useQuery } from "react-query";
import { request } from "./Utils";

const fetchAllManager = async () => {
  const response = await request({ url: "managers", method: "get" });
  console.log(response.status);
  if (response.status === 304) {
    throw new Error("Problem fetching data");
  }

  return response;
};

const GetManagerList = () => {
  return useQuery("managersKey", fetchAllManager, {
    refetchOnWindowFocus: false,
  });
};

export default GetManagerList;
