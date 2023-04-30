import { css, keyframes } from "@emotion/react";

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const loadingCircleStyle = (borderColor: string, sidesBoderColor: string) => css({
  width: "50px",
  height: "50px",
  margin: "20px",
  border: "3px solid",
  borderColor: borderColor,
  borderTop: "3px solid",
  borderTopColor: sidesBoderColor,
  borderLeft: "3px solid",
  borderLeftColor: sidesBoderColor,
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
});
