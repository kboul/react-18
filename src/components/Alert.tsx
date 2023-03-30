import {
  Alert,
  AlertIcon,
  AlertProps,
  Box,
  CloseButton,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface AppAlertProps extends AlertProps {
  children: ReactNode;
  onAlertClick?: () => void;
}

export default function AppAlert({
  children,
  onAlertClick,
  ...otherProps
}: AppAlertProps) {
  return (
    <Alert {...otherProps}>
      <AlertIcon />
      {children}
      <Box flex={1} />

      <CloseButton onClick={onAlertClick} />
    </Alert>
  );
}
