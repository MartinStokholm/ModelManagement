import { ChangeEvent, useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import type { ModelRegisterDto } from "../interfaces/Model";
import { useRegister } from "../api/post/PostModel";

const CreateModel = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [addresLine1, setAddresLine1] = useState<string>("");
  const [addresLine2, setAddresLine2] = useState<string>("");
  const [zip, setZip] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");
  const [height, setHeight] = useState<number>(0);
  const [shoeSize, setShoeSize] = useState<number>(0);
  const [hairColor, setHairColor] = useState<string>("");
  const [eyeColor, setEyeColor] = useState<string>("");
  const [comments, setComments] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { mutate: register } = useRegister();

  const handleSubmit = () => {
    const model: ModelRegisterDto = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNo: phone,
      addresLine1: addresLine1,
      addresLine2: addresLine2,
      zip: zip,
      city: city,
      country: country,
      birthDate: birthDate,
      nationality: nationality,
      height: height,
      shoeSize: shoeSize,
      hairColor: hairColor,
      eyeColor: eyeColor,
      comments: comments,
      password: password,
    };
    register(model);
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
              value={firstName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFirstName(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col mx-2">
            <Label>Last name</Label>
            <TextInput
              type="text"
              required
              placeholder="Doe"
              value={lastName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLastName(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col mx-2">
            <Label>Email</Label>
            <TextInput
              type="email"
              required
              placeholder="john@mail.com"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col mx-2">
            <Label>Phone</Label>
            <TextInput
              type="number"
              required
              placeholder="12345678"
              value={phone}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPhone(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col mx-2">
            <Label>Addres line 1</Label>
            <TextInput
              type="text"
              required
              placeholder="street 1"
              value={addresLine1}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setAddresLine1(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col mx-2">
            <Label>Addres line 2</Label>
            <TextInput
              type="text"
              required={false}
              placeholder="street 2"
              value={addresLine2}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setAddresLine2(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col mx-2">
            <Label>Zip</Label>
            <TextInput
              type="number"
              required
              placeholder="1234"
              value={zip}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setZip(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col mx-2">
            <Label>City</Label>
            <TextInput
              type="text"
              required
              placeholder="City"
              value={city}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCity(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col mx-2">
            <Label>Country</Label>
            <TextInput
              type="text"
              required
              placeholder="Country"
              value={country}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCountry(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col mx-2">
            <Label>Birth date</Label>
            <TextInput
              type="date"
              required
              placeholder="2022-12-03"
              value={birthDate}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setBirthDate(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col mx-2">
            <Label>Nationality</Label>
            <TextInput
              type="text"
              required
              placeholder="Nationality"
              value={nationality}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNationality(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col mx-2">
            <Label>Height</Label>
            <TextInput
              required
              type="number"
              placeholder="183"
              value={height}
              min={10}
              max={230}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setHeight(e.target.valueAsNumber)
              }
            />
          </div>
          <div className="flex flex-col mx-2">
            <Label>Shoe size</Label>
            <TextInput
              required
              type="number"
              placeholder="69"
              value={shoeSize}
              min={10}
              max={70}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setShoeSize(e.target.valueAsNumber)
              }
            />
          </div>
          <div className="flex flex-col mx-2">
            <Label>Hair Color</Label>
            <TextInput
              type="text"
              required
              placeholder="Spicy Red"
              value={hairColor}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setHairColor(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col mx-2">
            <Label>Eye Color</Label>
            <TextInput
              type="text"
              required
              placeholder="Souless black"
              value={eyeColor}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEyeColor(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col mx-2">
            <Label>Comments</Label>
            <TextInput
              type="text"
              required
              placeholder="Comment"
              value={comments}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setComments(e.target.value)
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
            <Label>Create a Model</Label>
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateModel;
