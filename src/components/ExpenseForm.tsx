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

import ExpenseList from "./ExpenseList";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" }),
  amount: z.number({ invalid_type_error: "Amount is required" }),
  category: z.string().nonempty({ message: "Category is required" }),
});

type FormData = z.infer<typeof schema>;

export default function ExpenseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Input {...register("description")} />
        {errors.description && (
          <Alert status="error">
            <AlertDescription>{errors.description.message}</AlertDescription>
          </Alert>
        )}

        <FormLabel mt={4}>Amount</FormLabel>
        <Input {...register("amount", { valueAsNumber: true })} type="number" />
        {errors.amount && (
          <Alert status="error">
            <AlertDescription>{errors.amount.message}</AlertDescription>
          </Alert>
        )}

        <FormLabel mt={4}>Category</FormLabel>
        <ExpenseList {...register("category")} />
        {errors.category && (
          <Alert status="error">
            <AlertDescription>{errors.category.message}</AlertDescription>
          </Alert>
        )}
      </FormControl>

      <Button mt={4} type="submit">
        Submit
      </Button>
    </form>
  );
}
