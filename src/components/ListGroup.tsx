import { useState } from "react";

interface ListGroupProps {
  heading: string;
  items: string[];
}

export default function ListGroup({ heading, items }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>();

  const message = items.length === 0 && <p>No item found</p>;

  const handleClick = (index: number) => () => setSelectedIndex(index);

  return (
    <>
      <h1>{heading}</h1>
      {message}
      <ul>
        {items.map((item, index) => (
          <li
            key={item}
            onClick={handleClick(index)}
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
