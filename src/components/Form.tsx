import {
  Alert,
  AlertDescription,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  age: z
    .number({ invalid_type_error: "Age field is required" })
    .min(18, { message: "You must be at least 18 years old" }),
});

type FormData = z.infer<typeof schema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input {...register("name")} />
        {errors.name && (
          <Alert status="error">
            <AlertDescription>{errors.name.message}</AlertDescription>
          </Alert>
        )}

        <FormLabel mt={4}>Age</FormLabel>
        <Input {...register("age", { valueAsNumber: true })} type="number" />
        {errors.age && (
          <Alert status="error">
            <AlertDescription>{errors.age.message}</AlertDescription>
          </Alert>
        )}
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
}
