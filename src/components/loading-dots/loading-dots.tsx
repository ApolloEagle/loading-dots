import React, { createContext } from "react";
import Container from "../container/container";

interface LoadingDotsProps {
  style?: string;
  dots?: number;
  color?: string;
  size?: number;
  spacing?: number;
}

const defaultState = {
  style: "pulse",
  dots: 3,
  color: "black",
  size: 10,
  spacing: 2,
};

const LoadingDotContext = createContext<LoadingDotsProps>(defaultState);

const LoadingDots = ({
  style = defaultState.style,
  dots = defaultState.dots,
  color = defaultState.color,
  size = defaultState.size,
  spacing = defaultState.spacing,
}: LoadingDotsProps): JSX.Element => {
  return (
    <LoadingDotContext.Provider value={{ style, dots, color, size, spacing }}>
      <Container />
    </LoadingDotContext.Provider>
  );
};

export default LoadingDots;
export { LoadingDotContext };
