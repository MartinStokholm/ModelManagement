import { ChangeEvent, useState } from "react";
import { useJobAddModel } from "../api/post/PostJobAddModel";
import { useJobDeleteModel } from "../api/delete/JobRemovedModel";
import { JobModelDto } from "../interfaces/Job";
import GetModelList from "../api/get/Model";
import { Button } from "flowbite-react";

const ModalJobModel = ({ jobId }: { jobId: number }) => {
  const { data: data, isLoading, isError, error } = GetModelList();
  const model: any[] = data?.data;
  const { mutate: jobAddModel } = useJobAddModel();
  const { mutate: jobDeleteModel } = useJobDeleteModel();
  const [modelId, setModelId] = useState<number>(0);
  const [modelName, setModelName] = useState<string>("Select an options");
  const [open, setOpen] = useState(false);

  if (isLoading) {
    return <></>;
  }

  if (isError) {
    return <p>{(error as any).message} </p>;
  }

  const handleMenu = (model: string, index: number) => {
    setModelId(index + 1);
    setModelName(model);
    setOpen(false);
  };

  const handleAddModelOnclick = () => {
    const workoutDto: JobModelDto = {
      jobId: jobId,
      modelId: modelId,
    };
    console.log("workoutdto", workoutDto);
    jobAddModel(workoutDto);
  };
  const handleDeleteModelOnclick = () => {
    const workoutDto: JobModelDto = {
      jobId: jobId,
      modelId: modelId,
    };
    jobDeleteModel(workoutDto);
  };

  return (
    <>
      <form className="flex flex-col justify-center">
        <label className="mx-4 text-sm">Change Model To Job</label>
        <Dropdown
          trigger={
            <button className="mx-2 flex justify-center items-center">
              {modelName}
              <ChevronDownIcon className="m-2 h-10 w-10" />
            </button>
          }
          menu={model.map((model, index) => (
            <DropdownButton
              onClick={() => handleMenu(model?.firstName, index)}
              text={model?.firstName}
              key={index}
            />
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
