import { useQuery } from "react-query";
import { request } from "./Utils";

const fetchAllModels = async () => {
  const response = await request({ url: "models", method: "get" });
  if (response.status === 304) {
    throw new Error("Problem fetching data");
  }
  return response;
};

const GetModelList = () => {
  return useQuery("modelsKey", fetchAllModels, {
    refetchOnWindowFocus: false,
  });
};

export default GetModelList;
