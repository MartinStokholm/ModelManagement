import { ManagerRegisterDto } from "../interfaces/Manager";

const ManagerList = ({ managerData }: { managerData: any[] }) => {
  return (
    <>
      {managerData?.map((manager: ManagerRegisterDto, index) => (
        <div
          key={index}
          className="rounded bg-white shadow-lg md:w-1/3 m-4 flex flex-col justify-center"
        >
          <div className="border rounded border-grey-300 bg-white overflow-hidden shadow-lg flex flex-col p-4">
            <h3>
              Name: {manager.firstName} {manager.lastName}
            </h3>
            <h3>Email: {manager.email}</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default ManagerList;
