import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input {...register("name")} />

        <FormLabel mt={4}>Age</FormLabel>
        <Input {...register("age")} type="number" />
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
}
