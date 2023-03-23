import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface AppButtonProps extends ButtonProps {
  children: ReactNode;
}

export default function AppButton({ children, ...rest }: AppButtonProps) {
  return <Button {...rest}>{children}</Button>;
}
