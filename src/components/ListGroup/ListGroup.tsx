import { Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import { useState } from "react";

import "./ListGroup.css";

interface ListGroupProps {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

export default function ListGroup({
  heading,
  items,
  onSelectItem,
}: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const message = items.length === 0 && <p>No item found</p>;

  const handleClick = (item: string, index: number) => () => {
    setSelectedIndex(index);
    onSelectItem(item);
  };

  return (
    <>
      <Heading as="h1">{heading}</Heading>
      {message}
      <UnorderedList>
        {items.map((item, index) => (
          <ListItem
            key={item}
            onClick={handleClick(item, index)}
            style={{
              cursor: "pointer",
              backgroundColor:
                selectedIndex === index ? "lightblue" : "transparent",
            }}
          >
            {item}
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
}
