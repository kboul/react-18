import { Select, SelectProps } from "@chakra-ui/react";
import { forwardRef } from "react";

interface ExpenseListProps extends SelectProps {
  showAllOption?: boolean;
}

const ExpenseList = forwardRef<HTMLSelectElement, ExpenseListProps>(
  ({ showAllOption, ...otherProps }, ref) => {
    return (
      <Select placeholder=" " {...otherProps} ref={ref}>
        {showAllOption && <option value="all">All catgories</option>}
        <option value="groceries">Groceries</option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
      </Select>
    );
  }
);

export default ExpenseList;
