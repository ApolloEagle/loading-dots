import React, { useContext } from "react";
import { DotProps } from "./types";
import { Animated } from "react-native";
import { LoadingDotContext } from "../loading-dots/loading-dots";

const Dot = ({ size }: DotProps): JSX.Element => {
  const loadingDotContext = useContext(LoadingDotContext);
  return (
    <Animated.View
      style={{
        backgroundColor: loadingDotContext?.color,
        height: size,
        width: size,
        borderRadius: 9999,
        margin: loadingDotContext?.spacing,
      }}
    />
  );
};

export default Dot;
