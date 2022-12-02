import { Animated, StyleSheet } from "react-native";
import { AnimationTypes, AnimationStylesMapProps } from "../types";

const baseStyle = (color?: string, size?: number, spacing?: number) => ({
  backgroundColor: color,
  width: size,
  margin: spacing,
  aspectRatio: 1,
  borderRadius: 9999,
});

const animationStylesMap: AnimationStylesMapProps = {
  elastic: (
    color?: string,
    size?: number,
    spacing?: number,
    animationValue?: Animated.Value
  ) => ({
    transform: [{ scaleY: animationValue }],
    ...baseStyle(color, size, spacing),
  }),
  pulse: (
    color?: string,
    size?: number,
    spacing?: number,
    animationValue?: Animated.Value
  ) => ({
    transform: [{ scale: animationValue }],
    ...baseStyle(color, size, spacing),
  }),
  fading: (
    color?: string,
    size?: number,
    spacing?: number,
    animationValue?: Animated.Value
  ) => ({
    opacity: animationValue,
    ...baseStyle(color, size, spacing),
  }),
  wave: (
    color?: string,
    size?: number,
    spacing?: number,
    animationValue?: Animated.Value
  ) => ({
    transform: [{ translateY: animationValue }],
    ...baseStyle(color, size, spacing),
  }),
  ping: (
    color?: string,
    size?: number,
    spacing?: number,
    animationValue?: Animated.Value
  ) => ({
    transform: [
      {
        scale: animationValue?.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
        }),
      },
    ],
    opacity: animationValue,
    ...baseStyle(color, size, spacing),
  }),
};

export const animationStyles = (
  animationValue: Animated.Value,
  animationType: `${AnimationTypes}`,
  color?: string,
  size?: number,
  spacing?: number
) => {
  return StyleSheet.create({
    dot: animationStylesMap[animationType](
      color,
      size,
      spacing,
      animationValue
    ),
  });
};
