import React from "react";
import { LoadingDotsProps } from "../types";
import { Container } from "./container";
import { LoadingDotContextProvider } from "./context";

const LoadingDots = ({
  animation = "pulse",
  dots = 3,
  color = "black",
  size = 10,
  spacing = 2,
  delay = 260,
}: LoadingDotsProps): JSX.Element => {
  return (
    <LoadingDotContextProvider
      values={{ animation, dots, color, size, spacing, delay }}
    >
      <Container />
    </LoadingDotContextProvider>
  );
};

export { LoadingDots };
