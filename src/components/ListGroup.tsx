import { useState } from "react";

const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

export default function ListGroup() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>();

  const message = items.length === 0 && <p>No item found</p>;

  const handleClick = (index: number) => () => setSelectedIndex(index);

  return (
    <>
      <h1>List</h1>
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
