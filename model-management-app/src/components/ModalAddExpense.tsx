import { ChangeEvent, useState } from "react";
import { useExpense } from "../../../mutation/Expense/PostExpense";
import NumberField from "../../NumberField";
import Button from "../../Button";
import { ExpenseDto } from "../../../../interfaces/Expense";
import InputField from "../../InputFieldModal";
import { Label } from "../../ModalComponents/Label";

const ModalJobModel = ({ jobId }: { jobId: number }) => {
  const { mutate: expense } = useExpense();
  const [modelId, setModelId] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [textValue, setTextValue] = useState<string>("");

  const handleAddModelOnclick = () => {
    const workoutDto: ExpenseDto = {
      modelId: modelId,
      jobId: jobId,
      date: date,
      text: textValue,
      amount: amount,
    };
    expense(workoutDto);
  };

  return (
    <form className="flex flex-col justify-center">
      <label className="mx-4 text-sm">Add Expense To Job</label>
      <div className=" inline-flex justify-between">
        <Label text={"Model Id"} />
        <NumberField
          required
          placeholder="560"
          value={modelId}
          min={"0"}
          max={"5000"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setModelId(e.target.valueAsNumber)
          }
        />
      </div>

      <div className=" inline-flex justify-between">
        <Label text={"Text"} />
        <InputField
          type="text"
          required
          placeholder="Text"
          value={textValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTextValue(e.target.value)
          }
        />
      </div>
      <div className=" inline-flex justify-between">
        <Label text={"Date"} />
        <InputField
          type="date"
          required
          placeholder="2022-12-03T20:42:51.203Z"
          value={date}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDate(e.target.value)
          }
        />
      </div>
      <div className=" inline-flex justify-between">
        <Label text={"Amount"} />
        <NumberField
          required
          placeholder="356"
          value={amount}
          min={"0"}
          max={"5000"}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setAmount(e.target.valueAsNumber)
          }
        />
      </div>
      <div className="inline-flex justify-between ">
        <Button text="Add" onClick={handleAddModelOnclick} />
      </div>
    </form>
  );
};

export default ModalJobModel;
