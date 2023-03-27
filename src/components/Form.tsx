import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useRef } from "react";

export default function Form() {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const person = { name: "", age: 0 };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    person.name = nameRef.current?.value || "";
    person.age = parseInt(ageRef.current?.value || "0");
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input ref={nameRef} />

        <FormLabel mt={4}>Age</FormLabel>
        <Input type="number" ref={ageRef} />
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
}
