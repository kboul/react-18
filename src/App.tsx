import { Container, Flex, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { FaCity } from "react-icons/fa";

import { Alert, Button, Like, ListGroup } from "./components";

export default function App() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <Container>
      <Stack spacing={4}>
        <ListGroup
          heading={
            <Flex>
              Cities <FaCity size="20" />
            </Flex>
          }
          items={["New York", "San Francisco", "Tokyo", "London", "Paris"]}
          onSelectItem={handleSelectItem}
        />
        {showAlert && (
          <Alert onAlertClick={() => setShowAlert(false)}>Hello World</Alert>
        )}

        <Button
          colorScheme="blue"
          onClick={() => setShowAlert(true)}
          width="28"
        >
          Show alert
        </Button>

        <Like onClick={() => console.log("clicked")} />
      </Stack>
    </Container>
  );
}
