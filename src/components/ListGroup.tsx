let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
items = [];

export default function ListGroup() {
  const message = items.length === 0 && <p>No item found</p>;
  return (
    <>
      <h1>List</h1>
      {message}
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
