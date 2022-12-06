import { ChangeEvent, useState } from "react";
import { useJobAddModel } from "../../api/post/PostJobAddModel";
import { useJobDeleteModel } from "../../api/delete/JobRemovedModel";
import { JobModelDto } from "../../interfaces/Job";
import GetModelList from "../../api/get/Model";
import { Button } from "flowbite-react";
import Dropdown from "../Dropdown";

const ModalJobModel = ({ jobId }: { jobId: number }) => {
  const { data: data, isLoading, isError, error } = GetModelList();
  const model: any[] = data?.data;
  const { mutate: jobAddModel } = useJobAddModel();
  const { mutate: jobDeleteModel } = useJobDeleteModel();
  const [modelId, setModelId] = useState<number>(0);
  const [modelName, setModelName] = useState<string>("Select an options");

  if (isLoading) {
    return <></>;
  }

  if (isError) {
    return <p>{(error as any).message} </p>;
  }

  const handleMenu = (model: string, index: number) => {
    setModelId(index + 1);
    setModelName(model);
  };

  const handleAddModelOnclick = () => {
    const jobModelDto: JobModelDto = {
      jobId: jobId,
      modelId: modelId,
    };
    console.log("jobModeldto", jobModelDto);
    jobAddModel(jobModelDto);
  };
  const handleDeleteModelOnclick = () => {
    const jobModelDto: JobModelDto = {
      jobId: jobId,
      modelId: modelId,
    };
    jobDeleteModel(jobModelDto);
  };

  return (
    <>
      <form className="flex flex-col justify-center">
        <label className="mx-4 text-sm">Change Model To Job</label>
        <Dropdown
          trigger={
            <button className="mx-2 flex justify-center items-center">
              {modelName}
            </button>
          }
          menu={model.map((model, index) => (
            <Button
              onClick={() => handleMenu(model?.firstName, index)}
              key={index}
            >
              {model?.firstName}
            </Button>
          ))}
        />

        <div className="inline-flex justify-between ">
          <Button onClick={handleAddModelOnclick}>Add</Button>
          <Button onClick={handleDeleteModelOnclick}>Remove</Button>
        </div>
      </form>
    </>
  );
};

export default ModalJobModel;
