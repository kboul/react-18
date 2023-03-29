import { Select, SelectProps } from "@chakra-ui/react";
import { forwardRef } from "react";

interface ExpenseListProps extends SelectProps {
  showAllOption?: boolean;
}

const ExpenseList = forwardRef<HTMLSelectElement, ExpenseListProps>(
  ({ showAllOption, ...otherProps }, ref) => {
    return (
      <Select placeholder=" " {...otherProps} ref={ref}>
        {showAllOption && (
          <option value="All categories">All categories</option>
        )}
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </Select>
    );
  }
);

export default ExpenseList;
