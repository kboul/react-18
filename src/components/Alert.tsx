import { Alert, AlertIcon } from "@chakra-ui/react";
import { ReactNode } from "react";

interface AppAlertProps {
  children: ReactNode;
}

export default function AppAlert({ children }: AppAlertProps) {
  return (
    <Alert status="info">
      <AlertIcon />
      {children}
    </Alert>
  );
}
