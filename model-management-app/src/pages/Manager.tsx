import { Spinner } from "flowbite-react";
import GetManagerList from "../api/get/Manager";
import CreateManager from "../components/manager/CreateManager";
import ManagerList from "../components/manager/ManagerList";
import CreateModel from "../components/manager/CreateModel";

const Mananger = () => {
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
      <div className="flex justify-between">
        <div className="w-1/2">
          <CreateManager />
        </div>
        <div className="w-1/2">
          <CreateModel />
        </div>
      </div>
      <ManagerList managerData={managerData?.data} />
    </>
  );
};

export default Mananger;
