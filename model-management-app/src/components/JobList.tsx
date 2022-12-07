import type { Job } from "../interfaces/Job";
import Moment from "moment";
import { Label, Table } from "flowbite-react";

const JobList = ({ jobList }: { jobList: Job[] }) => {
  Moment.locale("dk");
  return (
    <div className="border rounded border-grey-400 bg-white overflow-hidden shadow-lg flex p-4 justify-center">
      <div className="flex flex-col">
        <Label className="py-4">List of jobs</Label>
        <Table>
          <Table.Head>
            <Table.HeadCell>Customer</Table.HeadCell>
            <Table.HeadCell>Location</Table.HeadCell>
            <Table.HeadCell>Start date</Table.HeadCell>
            <Table.HeadCell>Days</Table.HeadCell>
            <Table.HeadCell>Comments</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {jobList?.map((job: any) => (
              <Table.Row
                key={job.jobId}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {job.customer}
                </Table.Cell>
                <Table.Cell>{job.location}</Table.Cell>
                <Table.Cell>{Moment(job.startDate).format("LLLL")}</Table.Cell>
                <Table.Cell>{job.days}</Table.Cell>
                <Table.Cell>{job.comments}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default JobList;
