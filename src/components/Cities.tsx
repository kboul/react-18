import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { FaCity } from "react-icons/fa";

import { Alert, Button } from ".";
import ListGroup from "./ListGroup/ListGroup";

export default function Cities() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <ListGroup
      heading={
        <Flex>
          Cities <FaCity size="20" />
        </Flex>
      }
      items={["New York", "San Francisco", "Tokyo", "London", "Paris"]}
      onSelectItem={handleSelectItem}
    />
  );

  {
    showAlert && (
      <Alert onAlertClick={() => setShowAlert(false)}>Hello World</Alert>
    );

    <Button colorScheme="blue" onClick={() => setShowAlert(true)} width="28">
      Show alert
    </Button>;
  }
}
