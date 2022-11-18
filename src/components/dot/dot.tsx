import React, { useContext } from "react";
import { Animated } from "react-native";
import { LoadingDotContext } from "../loading-dots/loading-dots";

interface DotProps {
  size: Animated.Value;
}

const Dot = ({ size }: DotProps): JSX.Element => {
  const { color, spacing } = useContext(LoadingDotContext);
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

export default Dot;
