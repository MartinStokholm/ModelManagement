import { Spinner } from "flowbite-react";
import { GetJob } from "../api/get/Job";
import { useParams } from "react-router-dom";
import JobItemModel from "../components/job/JobItemModel";

const JobsPage = () => {
  const { jobId } = useParams();
  const { data: jobsData, isLoading, isError, error } = GetJob(Number(jobId));

  if (isLoading) {
    return <Spinner color="info" size="xl" />;
  }

  if (isError) {
    return <p>{(error as any).message} </p>;
  }

  return (
    <>
      <JobItemModel job={jobsData?.data} />
    </>
  );
};

export default JobsPage;
