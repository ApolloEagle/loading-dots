import React, { createContext } from "react";
import { LoadingDotsProps } from "./types";

export const defaultState = {
  style: "pulse",
  dots: 3,
  color: "black",
  size: 10,
  spacing: 2,
};

export const LoadingDotContext = createContext<LoadingDotsProps>(defaultState);
