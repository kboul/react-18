import {
  Alert,
  AlertDescription,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input {...register("name", { required: true, minLength: 3 })} />
        {errors.name?.type === "required" && (
          <Alert status="error">
            <AlertDescription>The name field is required</AlertDescription>
          </Alert>
        )}
        {errors.name?.type === "minLength" && (
          <Alert status="error">
            <AlertDescription>
              The name must be at least 3 characters
            </AlertDescription>
          </Alert>
        )}

        <FormLabel mt={4}>Age</FormLabel>
        <Input {...register("age")} type="number" />
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
}
