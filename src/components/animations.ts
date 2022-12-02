import { Animated } from "react-native";
import { AnimationTypes } from "../types";

export const animations = (
  type: string,
  animationValue: Animated.Value,
  delay: number,
  duration: number,
  size: number
) => {
  const createAnimation = (
    initialValue: number,
    endValue: number,
    animationValue: Animated.Value,
    delay: number,
    duration: number
  ) =>
    Animated.sequence([
      Animated.timing(animationValue, {
        toValue: initialValue,
        delay,
        duration,
        useNativeDriver: false,
      }),
      Animated.timing(animationValue, {
        toValue: endValue,
        duration,
        useNativeDriver: false,
      }),
    ]);

  const animationsMap = {
    [AnimationTypes.ELASTIC]: createAnimation(
      1.5,
      1,
      animationValue,
      delay,
      duration
    ),
    [AnimationTypes.PULSE]: createAnimation(
      0,
      1,
      animationValue,
      delay,
      duration
    ),
    [AnimationTypes.FADING]: createAnimation(
      1,
      0,
      animationValue,
      delay,
      duration
    ),
    [AnimationTypes.WAVE]: createAnimation(
      -size,
      0,
      animationValue,
      delay,
      duration
    ),
  };

  switch (type) {
    case AnimationTypes.ELASTIC:
      return animationsMap[AnimationTypes.ELASTIC];
    case AnimationTypes.PULSE:
      return animationsMap[AnimationTypes.PULSE];
    case AnimationTypes.FADING:
      return animationsMap[AnimationTypes.FADING];
    case AnimationTypes.WAVE:
      return animationsMap[AnimationTypes.WAVE];
    default:
      return animationsMap[AnimationTypes.ELASTIC];
  }
};
