import React from "react";
import { ChangeEvent, useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import type { AccountLoginDto } from "../interfaces/Account";
import { useLogin } from "../api/post/Login";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: login } = useLogin();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const userLogin: AccountLoginDto = {
      email: username,
      password: password,
    };
    login(userLogin);
  };
  return (
    <div className="flex flex-col w-1/3 justify-center">
      <form className="flex flex-col justify-center">
        <div className=" inline-flex justify-center ">
          <Label>Email</Label>
          <TextInput
            type="text"
            required
            placeholder="email"
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />
        </div>
        <div className=" inline-flex justify-center ">
          <Label>Password</Label>
          <TextInput
            type="Password"
            required
            placeholder="********"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <div className="flex justify-center">
          <Button onClick={handleSubmit}>Log in</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
