import { Container, Stack } from "@chakra-ui/react";
import { Alert, Button, ListGroup } from "./components";

export default function App() {
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
        <Alert>Hello World</Alert>

        <Button
          colorScheme="blue"
          onClick={() => console.log("button clicked")}
        >
          Button
        </Button>
      </Stack>
    </Container>
  );
}
