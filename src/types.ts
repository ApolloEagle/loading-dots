import { Animated } from "react-native";

export type DotProps = {
  size: Animated.Value;
};

export type LoadingDotsProps = {
  style?: string;
  dots?: number;
  color?: string;
  size?: number;
  spacing?: number;
};
