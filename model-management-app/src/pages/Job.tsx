import { Spinner } from "flowbite-react";
import GetJobList from "../api/get/Jobs";
import CreateJob from "../components/CreateJob";
import JobList from "../components/JobList";

const JobPage = () => {
  const { data: jobsData, isLoading, isError, error } = GetJobList();
  console.log("job ", jobsData);

  if (isLoading) {
    return <Spinner color="info" size="xl" />;
  }

  if (isError) {
    return <p>{(error as any).message} </p>;
  }

  return (
    <>
      <CreateJob />
      <JobList jobList={jobsData?.data} />
    </>
  );
};

export default JobPage;
