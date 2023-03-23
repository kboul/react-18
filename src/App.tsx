import { ListGroup } from "./components";

export default function App() {
  return (
    <ListGroup
      heading="Cities"
      items={["New York", "San Francisco", "Tokyo", "London", "Paris"]}
    />
  );
}
