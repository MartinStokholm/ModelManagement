export type ModelRegisterDto = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  addresLine1: string;
  addresLine2: string;
  zip: string;
  city: string;
  country: string;
  birthDate: string;
  nationality: string;
  height: number;
  shoeSize: number;
  hairColor: string;
  eyeColor: string;
  comments: string;
  password: string;
};

export type ModelDto = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  jobs: string[];
};

export type account = {
  efAccountId: number;
  email: string;
  pwHash: string;
  isManager: true;
};

type expense = {
  efExpenseId: number;
  modelId: number;
  jobId: number;
  date: string;
  text: string;
  amount: number;
};
