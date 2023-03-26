import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useState } from "react";

import { Button } from ".";

export default function ShoppingCart() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      {
        id: 1,
        title: "Product 1",
        quantity: 1,
      },
      {
        id: 2,
        title: "Product 2",
        quantity: 1,
      },
    ],
  });

  const handleAdd = (id: number) => () => {
    setCart((prevState) => ({
      ...prevState,
      items: prevState.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity++ } : item
      ),
    }));
  };

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {Object.keys(cart.items[0]).map((key) => (
              <Th key={key}>{key}</Th>
            ))}
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {cart.items.map((item) => (
            <Tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.title}</Td>
              <Td>{item.quantity}</Td>
              <Td>
                <Button onClick={handleAdd(item.id)}>+</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
