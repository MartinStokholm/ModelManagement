import { Spinner } from "flowbite-react";
import GetManagerList from "../api/get/Manager";
import GetJobList from "../api/get/Jobs";
import CreateManager from "../components/CreateManager";
import CreateModel from "../components/CreateModel";
import CreateJob from "../components/CreateJob";
import AddModel from "../components/AddModel";
import ManagerList from "../components/ManagerList";
import JobList from "../components/JobList";
import RemoveModel from "../components/RemoveModel";

const Mananger = () => {
  const { data: jobsData } = GetJobList();
  console.log("job ", jobsData);

  const { data: managerData, isLoading, isError, error } = GetManagerList();
  console.log("manager ", managerData);
  if (isLoading) {
    return <Spinner color="info" size="xl" />;
  }

  if (isError) {
    return <p>{(error as any).message} </p>;
  }

  return (
    <>
      <div className="border-4 rounded border-blue-500 p-4">
        <CreateJob />
        <CreateManager />
        <AddModel />
        <RemoveModel />
        <CreateModel />
        <ManagerList managerData={managerData?.data} />
        <JobList jobList={jobsData?.data} />
      </div>
    </>
  );
};

export default Mananger;
