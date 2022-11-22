import React from "react";
import { LoadingDotsProps } from "../types";
import { Container } from "./container";
import { LoadingDotContextProvider } from "./context";

const LoadingDots = ({
  style = "pulse",
  dots = 3,
  color = "black",
  size = 10,
  spacing = 2,
}: LoadingDotsProps): JSX.Element => {
  return (
    <LoadingDotContextProvider values={{ style, dots, color, size, spacing }}>
      <Container />
    </LoadingDotContextProvider>
  );
};

export { LoadingDots };
