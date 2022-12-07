import { useMutation } from "react-query";
import { request } from "../Utils";
import { ExpenseDto } from "../../interfaces/Expense";

export const expense = async (data: ExpenseDto) => {
  return await request({
    url: `expenses`,
    method: "POST",
    data: data,
  });
};

export const useExpense = () => {
  return useMutation(expense, {
    onSuccess: () => {
      console.log("Expense added");
    },
    onError: (error) => {
      console.log((error as any).message);
    },
  });
};
