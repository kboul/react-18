import styled from "styled-components";
import { ListItem } from "@chakra-ui/react";

interface StyledListItemProps {
  active: boolean;
}

const StyledListItem = styled(ListItem)<StyledListItemProps>`
  list-style: none;
  padding: 0;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "lightblue" : "transparent")};
`;

export {StyledListItem}