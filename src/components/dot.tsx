import React from "react";
import { Animated } from "react-native";
import { useLoadingContext } from "./context";

const Dot = ({ size }: { size: Animated.Value }): JSX.Element => {
  const { color, spacing } = useLoadingContext();
  return (
    <Animated.View
      style={{
        backgroundColor: color,
        height: size,
        width: size,
        borderRadius: 9999,
        margin: spacing,
      }}
    />
  );
};

export { Dot };
