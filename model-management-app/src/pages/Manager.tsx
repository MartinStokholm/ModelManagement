import { Spinner } from "flowbite-react";
import GetManagerList from "../api/get/Manager";
import CreateManager from "../components/CreateManager";
import ManagerList from "../components/ManagerList";

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
      <CreateManager />
      <ManagerList managerData={managerData?.data} />
    </>
  );
};

export default Mananger;
