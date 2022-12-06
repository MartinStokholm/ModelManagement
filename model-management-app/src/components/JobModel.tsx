import { ModelDto } from "../../../../interfaces/Model";

const JobModel = ({ model }: { model: ModelDto }) => {
  return (
    <>
      <p>{model.firstName}</p>
      <p>{model.lastName}</p>
      <p>{model.email}</p>
      <p>{model.phoneNo}</p>
    </>
  );
};

export default JobModel;
