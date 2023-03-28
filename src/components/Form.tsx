import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({ name: "", age: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(person);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setPerson({
      ...person,
      [name]: type === "number" ? parseInt(value) : value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input name="name" onChange={handleChange} value={person.name} />

        <FormLabel mt={4}>Age</FormLabel>
        <Input
          name="age"
          onChange={handleChange}
          type="number"
          value={person.age}
        />
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
}
