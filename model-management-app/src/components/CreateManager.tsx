import { ChangeEvent, useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import type { ManagerRegisterDto } from "../interfaces/Manager";
import { useRegister } from "../api/post/PostManager";

const CreateManager = () => {
  const { mutate: register } = useRegister();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

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
      <div className="flex flex-col">
        <form className="flex flex-wrap">
          <div className="flex flex-col mx-2">
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
          <div className="flex flex-col mx-2">
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
          <div className="flex flex-col mx-2">
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
          <div className="flex flex-col mx-2">
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
          <div className="flex flex-col mx-2">
            <Label>Create a Manager</Label>
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateManager;
