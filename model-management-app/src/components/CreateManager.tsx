import { ChangeEvent, useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import type { ManagerRegisterDto } from "../interfaces/Manager";
import { useRegister } from "../api/post/PostManager";

const CreateManager = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const { mutate: register } = useRegister();

  const handleSubmit = () => {
    const manager: ManagerRegisterDto = {
      email: email,
      password: password,
      firstName: firstname,
      lastName: lastname,
    };
    register(manager);
  };
  return (
    <div className="border rounded border-grey-400 bg-white overflow-hidden shadow-lg flex p-4 justify-center">
      <div className="flex flex-col justify-center ">
        <form className="flex flex-col justify-center">
          <div className=" inline-flex justify-between ">
            <Label>First name</Label>
            <TextInput
              type="text"
              required
              placeholder="John"
              value={firstname}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFirstname(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between ">
            <Label>Last name</Label>
            <TextInput
              type="text"
              required
              placeholder="Doe"
              value={lastname}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLastname(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between ">
            <Label>Email</Label>
            <TextInput
              type="email"
              required
              placeholder="johndoe@mail.com"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className=" inline-flex justify-between ">
            <Label>Password</Label>
            <TextInput
              type="password"
              required
              placeholder="******"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>
          <Button onClick={handleSubmit}>Create</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateManager;
