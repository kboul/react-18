import { Flex, UnorderedList, ListItem } from "@chakra-ui/react";
import { useState } from "react";

import { Button } from ".";

export default function Pizza() {
  const [pizza, setpPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setpPizza((prevState) => ({
      ...prevState,
      toppings: [...prevState.toppings, "Cheese"],
    }));
  };

  return (
    <>
      <Flex>
        Pizza: <b>{pizza.name}</b>
        <br />
      </Flex>
      Toppings:
      <UnorderedList>
        {pizza.toppings.map((topping) => (
          <ListItem key={topping}>{topping}</ListItem>
        ))}
      </UnorderedList>
      <Button width={40} onClick={handleClick}>
        Add topping
      </Button>
    </>
  );
}
