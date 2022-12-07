import { ManagerRegisterDto } from "../interfaces/Manager";
import { Label, Table } from "flowbite-react";
const ManagerList = ({ managerData }: { managerData: any[] }) => {
  return (
    <div className="border rounded border-grey-400 bg-white overflow-hidden shadow-lg flex p-4 justify-center">
      <div className="flex flex-col">
        <Label className="py-4">List of managers</Label>
        <Table>
          <Table.Head>
            <Table.HeadCell>First name</Table.HeadCell>
            <Table.HeadCell>Last name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {managerData?.map((manager: ManagerRegisterDto, index) => (
              <Table.Row
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {manager.firstName}
                </Table.Cell>
                <Table.Cell>{manager.lastName}</Table.Cell>
                <Table.Cell>{manager.email}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ManagerList;
