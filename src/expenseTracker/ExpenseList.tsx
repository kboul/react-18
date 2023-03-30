import { Select, SelectProps } from "@chakra-ui/react";
import { forwardRef } from "react";
import { categories } from "./constants";

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
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
    );
  }
);

export default ExpenseList;
