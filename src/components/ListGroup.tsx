import { useState } from "react";

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
      <h1>{heading}</h1>
      {message}
      <ul>
        {items.map((item, index) => (
          <li
            key={item}
            onClick={handleClick(item, index)}
            style={{
              cursor: "pointer",
              backgroundColor:
                selectedIndex === index ? "lightblue" : "transparent",
              width: "15%",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
