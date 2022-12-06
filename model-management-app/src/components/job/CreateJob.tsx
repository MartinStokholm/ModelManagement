import { useState } from "react";
import { ChangeEvent } from "react";
import type { JobRegisterDto } from "../../interfaces/Job";
import { useRegister } from "../../api/post/PostJob";
import { Button, Label, TextInput } from "flowbite-react";

export default function CreateJob() {
  const [customer, setCustomer] = useState("");
  const [startdate, setstartDate] = useState("");
  const [days, setDays] = useState<number>(0);
  const [location, setLocation] = useState("");
  const [comments, setComments] = useState("");

  const { mutate: register } = useRegister();

  const handleSubmit = () => {
    const job: JobRegisterDto = {
      customer: customer,
      startdate: startdate,
      days: days,
      location: location,
      comments: comments,
    };
    register(job);
  };

  return (
    <div className="border rounded border-grey-400 bg-white overflow-hidden shadow-lg flex p-4 justify-center">
      <div className="flex flex-col justify-center ">
        <form className="flex flex-col justify-center">
          <div className=" inline-flex justify-between ">
            <Label>Customer</Label>
            <TextInput
              type="text"
              required
              placeholder="Customer"
              value={customer}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCustomer(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between ">
            <Label>Start Date</Label>
            <TextInput
              type="date"
              required
              placeholder="Start Date"
              value={startdate}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setstartDate(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between ">
            <Label>Days</Label>{" "}
            <TextInput
              required
              type="number"
              placeholder="0"
              value={days}
              min={0}
              max={365}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setDays(e.target.valueAsNumber)
              }
            />
          </div>
          <div className=" inline-flex justify-between ">
            <Label>Location</Label>
            <TextInput
              type="text"
              required
              placeholder="Location"
              value={location}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLocation(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between ">
            <Label> Comments</Label>
            <TextInput
              type="text"
              required
              placeholder="Comments"
              value={comments}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setComments(e.target.value)
              }
            />
          </div>
          <Button onClick={handleSubmit}>Create Job</Button>
        </form>
      </div>
    </div>
  );
}
