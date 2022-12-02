import { Animated } from "react-native";
import { DotProps } from "../types";
import { animationStyles } from "./animation-styles";

const Dot = ({
  color,
  size,
  spacing,
  animationValue,
  animationType,
}: DotProps) => (
  <Animated.View
    style={
      animationStyles(animationValue, animationType, color, size, spacing).dot
    }
  />
);

export default Dot;
