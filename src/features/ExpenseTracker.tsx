import { ExpenseForm, ExpenseList } from "../components";

export default function ExpenseTracker() {
  return (
    <>
      <ExpenseForm />

      <br />

      <ExpenseList showAllOption />
    </>
  );
}
