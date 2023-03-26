import { Container, Flex, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { FaCity } from "react-icons/fa";

import {
  Alert,
  Button,
  Like,
  ListGroup,
  Player,
  Pizza,
  ShoppinCart,
  ExpandableText,
} from "./components";

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

        <hr />

        <Like onClick={() => console.log("clicked")} />

        <hr />
        <Player />

        <hr />
        <Pizza />

        <hr />
        <ShoppinCart />

        <hr />
        <ExpandableText maxChars={21}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </ExpandableText>
      </Stack>
    </Container>
  );
}
