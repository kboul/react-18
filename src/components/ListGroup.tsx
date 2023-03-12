const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

export default function ListGroup() {
  return (
    <>
      <h1>List</h1>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
