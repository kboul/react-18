import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Button } from ".";

export default function Player() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame((prevState) => ({
      ...prevState,
      player: { ...prevState.player, name: "Bob" },
    }));
  };

  return (
    <>
      <Flex>
        Player: <b>{game.player.name}</b>
      </Flex>
      <Button width={40} onClick={handleClick}>
        Change player
      </Button>
    </>
  );
}
