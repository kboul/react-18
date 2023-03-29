import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Button } from ".";

interface ExpenseTableProps {
  expenseData: ExpenseData[];
}

export default function ExpenseTable({ expenseData }: ExpenseTableProps) {
  if (expenseData.length > 0)
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
            {expenseData.map(({ description, amount, category }) => {
              return (
                <Tr key={description}>
                  <Td>{description}</Td>
                  <Td>{amount}</Td>
                  <Td>{category}</Td>
                  <Td>
                    <Button colorScheme="red">Delete</Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    );
  return null;
}
