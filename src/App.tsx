import { Alert, ListGroup } from "./components";

export default function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <ListGroup
        heading="Cities"
        items={["New York", "San Francisco", "Tokyo", "London", "Paris"]}
        onSelectItem={handleSelectItem}
      />
      <Alert>Hello World</Alert>
    </>
  );
}
