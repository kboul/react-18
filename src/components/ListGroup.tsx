import { MouseEvent } from "react";

const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

export default function ListGroup() {
  const message = items.length === 0 && <p>No item found</p>;

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {message}
      <ul>
        {items.map((item) => (
          <li key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
