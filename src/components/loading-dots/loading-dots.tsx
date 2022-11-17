import React, { createContext } from "react";
import { LoadingDotsProps } from "./types";
import { Container } from "../container";

const LoadingDotContext = createContext<LoadingDotsProps | null>(null);

const LoadingDots = ({
  style = "pulse",
  dots = 3,
  color = "black",
  size = 10,
  spacing = 2,
}: LoadingDotsProps): JSX.Element => {
  return (
    <LoadingDotContext.Provider value={{ style, dots, color, size, spacing }}>
      <Container />
    </LoadingDotContext.Provider>
  );
};

export default LoadingDots;
export { LoadingDotContext };
