import { Spinner } from "flowbite-react";
import GetJobList from "../api/get/Jobs";
import AddExpense from "../components/AddExpense";
import JobList from "../components/JobList";

const Model = () => {
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
      <div className="border-4 rounded border-blue-500 p-4">
        <AddExpense />
        <JobList jobList={jobsData?.data} />
      </div>
    </>
  );
};

export default Model;
