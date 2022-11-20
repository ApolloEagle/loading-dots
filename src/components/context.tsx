import React, { createContext, ReactNode, useContext } from "react";

type LoadingDotsProps = {
  style?: string;
  dots?: number;
  color?: string;
  size?: number;
  spacing?: number;
};

const defaultState = {
  style: "pulse",
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

const LoadingDotContextProvider = ({ children }: { children: ReactNode }) => (
  <LoadingDotContext.Provider value={{ ...defaultState }}>
    {children}
  </LoadingDotContext.Provider>
);

export { LoadingDotContextProvider, useLoadingContext };
