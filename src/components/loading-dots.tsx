import React from "react";
import { Container } from "./container";
import { LoadingDotContextProvider } from "./context";

const LoadingDots = (): JSX.Element => {
  return (
    <LoadingDotContextProvider>
      <Container />
    </LoadingDotContextProvider>
  );
};

export { LoadingDots };
