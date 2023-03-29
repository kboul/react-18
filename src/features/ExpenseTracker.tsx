import { useState } from "react";
import { FieldValues } from "react-hook-form";

import { ExpenseForm, ExpenseList, ExpenseTable } from "../components";

export default function ExpenseTracker() {
  const [expenseData, setExpenseData] = useState<ExpenseData[]>([]);

  const onSubmit = (data: FieldValues) =>
    setExpenseData((prevState) => [...prevState, data] as ExpenseData[]);

  return (
    <>
      <ExpenseForm onSubmit={onSubmit} />

      <br />

      <ExpenseList defaultValue="all" showAllOption />

      <ExpenseTable expenseData={expenseData} />
    </>
  );
}
