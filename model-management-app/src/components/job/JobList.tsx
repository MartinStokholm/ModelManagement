import { Link } from "react-router-dom";
import type { Job } from "../../interfaces/Job";
import Moment from "moment";

const JobList = ({ jobList }: { jobList: Job[] }) => {
  Moment.locale("dk");
  return (
    <>
      {jobList?.map((job: any) => (
        <div
          key={job.jobId}
          className="bg-white max-w-sm rounded overflow-hidden shadow-lg content-center h-200 flex flex-col justify-center"
        >
          <Link
            className="w-full block p-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            to={`/job/${job.jobId}`}
          >
            <p>Customer: {job.customer}</p>
            <p>Location: {job.location}</p>
            <p>Start date {Moment(job.startDate).format("LLLL")}</p>
            <p>Days: {job.days}</p>
            <p>Comments: {job.comments}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default JobList;
