import React, { createContext, ReactNode, useContext, useState } from "react";
import { LoadingDotsProps } from "../types";

const defaultState = {
  animation: "pulse",
  dots: 3,
  color: "black",
  size: 10,
  spacing: 2,
};

const LoadingDotContext = createContext<LoadingDotsProps>(defaultState);
const useLoadingContext = () => {
  const context = useContext(LoadingDotContext);
  return context;
};

const LoadingDotContextProvider = ({
  children,
  values,
}: {
  children: ReactNode;
  values: LoadingDotsProps;
}) => {
  return (
    <LoadingDotContext.Provider value={{ ...values }}>
      {children}
    </LoadingDotContext.Provider>
  );
};

export { LoadingDotContextProvider, useLoadingContext };
