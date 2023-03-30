import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Button } from "../components";

interface ExpandableTextProps {
  children: string;
  maxChars?: number;
}

export default function ExpandableText({
  children,
  maxChars = 100,
}: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => setIsExpanded(!isExpanded);

  const MoreLessButton = (
    <Button height={6} onClick={handleClick}>
      {isExpanded ? "Less" : "More"}
    </Button>
  );

  const getText = () => {
    if (children.length <= maxChars) return children;
    const textWithButton = isExpanded
      ? children
      : `${children.substring(0, maxChars)}...`;
    return (
      <>
        {textWithButton}
        {MoreLessButton}
      </>
    );
  };

  return <Flex>{getText()}</Flex>;
}
