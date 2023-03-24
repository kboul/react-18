import { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import styled, { css } from "styled-components";

const commonLikeStyle = css`
  cursor: pointer;
`;

const StyledLike = styled(FcLike)`
  ${commonLikeStyle}
`;

const StyledLikePlaceholder = styled(FcLikePlaceholder)`
  ${commonLikeStyle}
`;

interface LikeProps {
  onClick: () => void;
}

export default function Like({ onClick }: LikeProps) {
  const [liked, setLiked] = useState(false);

  const LikeIcon = liked ? StyledLike : StyledLikePlaceholder;

  const handleClick = () => {
    onClick();
    setLiked((prevState) => !prevState);
  };

  return <LikeIcon onClick={handleClick} size="40" />;
}
