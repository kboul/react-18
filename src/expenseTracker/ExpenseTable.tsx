import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Button } from "../components";

const getfilteredExpenseData = (
  listValue: string,
  expenseData: ExpenseData[]
) =>
  listValue === "All categories"
    ? expenseData
    : expenseData.filter(({ category }) => category === listValue);

const getFilteredExpenseDataWithTotal = (
  filteredExpenseData: ExpenseData[]
) => [
  ...filteredExpenseData,
  {
    description: "Total",
    amount: filteredExpenseData.reduce((acc, { amount }) => acc + amount, 0),
    category: "",
  },
];

interface ExpenseTableProps {
  expenseData: ExpenseData[];
  listValue: string;
  onExpenseDelete: (index: number) => void;
}

export default function ExpenseTable({
  expenseData,
  listValue,
  onExpenseDelete,
}: ExpenseTableProps) {
  if (expenseData.length > 0) {
    const filteredExpenseData = getfilteredExpenseData(listValue, expenseData);

    const filteredExpenseDataWithTotal =
      getFilteredExpenseDataWithTotal(filteredExpenseData);

    return (
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {Object.keys(expenseData[0]).map((key) => (
                <Th key={key}>{key}</Th>
              ))}
              <Th />
            </Tr>
          </Thead>
          <Tbody>
            {filteredExpenseDataWithTotal.map(
              ({ description, amount, category }, index) => {
                return (
                  <Tr key={description}>
                    <Td>{description}</Td>
                    <Td>${amount}</Td>
                    <Td>{category}</Td>
                    {description !== "Total" && (
                      <Td>
                        <Button
                          colorScheme="red"
                          onClick={() => onExpenseDelete(index)}
                        >
                          Delete
                        </Button>
                      </Td>
                    )}
                  </Tr>
                );
              }
            )}
          </Tbody>
        </Table>
      </TableContainer>
    );
  }
  return null;
}
