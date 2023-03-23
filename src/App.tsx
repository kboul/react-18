import { Container, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { Alert, Button, ListGroup } from "./components";

export default function App() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <Container>
      <Stack spacing={4}>
        <ListGroup
          heading="Cities"
          items={["New York", "San Francisco", "Tokyo", "London", "Paris"]}
          onSelectItem={handleSelectItem}
        />
        {showAlert && (
          <Alert onAlertClick={() => setShowAlert(false)}>Hello World</Alert>
        )}

        <Button colorScheme="blue" onClick={() => setShowAlert(true)}>
          Show alert
        </Button>
      </Stack>
    </Container>
  );
}
