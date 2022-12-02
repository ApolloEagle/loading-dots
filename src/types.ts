import { Animated } from "react-native";

export enum AnimationTypes {
  ELASTIC = "elastic",
  PULSE = "pulse",
  FADING = "fading",
  WAVE = "wave",
  PING = "ping",
}

export interface LoadingDotsProps {
  dotNumber?: number;
  animation?: `${AnimationTypes}`;
  size?: number;
  color?: string;
  delay?: number;
  duration?: number;
  spacing?: number;
  orientation?: string;
}

export interface DotProps {
  color?: string;
  size?: number;
  spacing?: number;
  animationValue: Animated.Value;
  animationType: `${AnimationTypes}`;
}

type AnimationStyleProps = {
  backgroundColor?: string;
  width?: number;
};

export interface AnimationStylesMapProps {
  elastic: (
    color?: string,
    size?: number,
    spacing?: number,
    animationValue?: Animated.Value
  ) => AnimationStyleProps;

  pulse: (
    color?: string,
    size?: number,
    spacing?: number,
    animationValue?: Animated.Value
  ) => AnimationStyleProps;
  fading: (
    color?: string,
    size?: number,
    spacing?: number,
    animationValue?: Animated.Value
  ) => AnimationStyleProps;

  wave: (
    color?: string,
    size?: number,
    spacing?: number,
    animationValue?: Animated.Value
  ) => AnimationStyleProps;

  ping: (
    color?: string,
    size?: number,
    spacing?: number,
    animationValue?: Animated.Value
  ) => AnimationStyleProps;
}
