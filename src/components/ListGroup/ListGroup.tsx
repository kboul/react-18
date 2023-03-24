import { Heading, UnorderedList } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

import { StyledListItem } from "./styles";

interface ListGroupProps {
  heading: string | ReactNode;
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
          <StyledListItem
            active={+(selectedIndex === index)}
            key={item}
            onClick={handleClick(item, index)}
          >
            {item}
          </StyledListItem>
        ))}
      </UnorderedList>
    </>
  );
}
