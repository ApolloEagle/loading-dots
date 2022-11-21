import React from "react";
import { Animated } from "react-native";

export const animationStyle = (
  node: Animated.Value,
  delay: number,
  size: number | undefined
): any => {
  const pulse = Animated.sequence([
    Animated.timing(node, {
      toValue: Number(size),
      delay,
      duration: 400,
      useNativeDriver: false,
    }),
    Animated.timing(node, {
      toValue: 0,
      duration: 400,
      useNativeDriver: false,
    }),
  ]);

  return pulse;
};
