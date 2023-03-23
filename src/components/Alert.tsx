import { Alert, AlertIcon, Box, CloseButton } from "@chakra-ui/react";
import { ReactNode } from "react";

interface AppAlertProps {
  children: ReactNode;
  onAlertClick?: () => void;
}

export default function AppAlert({ children, onAlertClick }: AppAlertProps) {
  return (
    <Alert status="info">
      <AlertIcon />
      {children}
      <Box flex={1} />

      <CloseButton onClick={onAlertClick} />
    </Alert>
  );
}
