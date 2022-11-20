import React from "react";
import { Container } from "./container";
import { LoadingDotContext, defaultState } from "../context";

const { style, dots, color, size, spacing } = defaultState;

const LoadingDots = (): JSX.Element => {
  return (
    <LoadingDotContext.Provider value={{ style, dots, color, size, spacing }}>
      <Container />
    </LoadingDotContext.Provider>
  );
};

export { LoadingDots };
