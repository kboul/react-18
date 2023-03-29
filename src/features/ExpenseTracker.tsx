import { ChangeEvent, useState } from "react";
import { FieldValues } from "react-hook-form";

import { ExpenseForm, ExpenseList, ExpenseTable } from "../components";

export default function ExpenseTracker() {
  const [expenseData, setExpenseData] = useState<ExpenseData[]>([]);
  const [listValue, setListValue] = useState("All categories");

  const onSubmit = (data: FieldValues) =>
    setExpenseData((prevState) => [...prevState, data] as ExpenseData[]);

  const handleExpenseDelete = (index: number) =>
    setExpenseData((prevState) => prevState.filter((_, i) => i !== index));

  const handleListValueChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setListValue(e.target.value);

  return (
    <>
      <ExpenseForm onSubmit={onSubmit} />

      <br />

      <ExpenseList
        onChange={handleListValueChange}
        showAllOption
        value={listValue}
      />

      <ExpenseTable
        expenseData={expenseData}
        listValue={listValue}
        onExpenseDelete={handleExpenseDelete}
      />
    </>
  );
}
