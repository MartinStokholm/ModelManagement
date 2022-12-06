import { ChangeEvent, useState } from "react";
import { useExpense } from "../../api/post/PostExpense";
import { ExpenseDto } from "../../interfaces/Expense";
import { Button, TextInput, Label } from "flowbite-react";

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
        <Label>Model Id</Label>
        <TextInput
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
        <Label>Text</Label>
        <TextInput
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
        <Label>Date</Label>
        <TextInput
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
        <Label>Amount</Label>
        <TextInput
          required
          type="number"
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
        <Button onClick={handleAddModelOnclick}> Add Expense</Button>
      </div>
    </form>
  );
};

export default ModalJobModel;
