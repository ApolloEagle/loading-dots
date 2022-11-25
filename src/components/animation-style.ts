import React from "react";
import { Animated } from "react-native";

export const animationStyle = (
  style: string | undefined,
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

  const elastic = Animated.sequence([
    Animated.timing(node, {
      toValue: 1.5,
      delay,
      duration: 400,
      useNativeDriver: false,
    }),
    Animated.timing(node, {
      toValue: 1,
      duration: 400,
      useNativeDriver: false,
    }),
  ]);

  const flashing = Animated.sequence([
    Animated.timing(node, {
      toValue: 1,
      delay,
      duration: 400,
      useNativeDriver: false,
    }),
    Animated.timing(node, {
      toValue: 0,
      duration: 400,
      useNativeDriver: false,
    }),
    Animated.timing(node, {
      toValue: 1,
      duration: 400,
      useNativeDriver: false,
    }),
  ]);

  const typing = Animated.sequence([
    Animated.timing(node, {
      toValue: -Number(size),
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

  const ping = Animated.sequence([
    Animated.timing(node, {
      toValue: 0,
      delay,
      duration: 1200,
      useNativeDriver: false,
    }),
  ]);

  switch (style) {
    case "pulse":
      return pulse;
    case "elastic":
      return elastic;
    case "flashing":
      return flashing;
    case "typing":
      return typing;
    case "ping":
      return ping;
    default:
      return pulse;
  }
};

export const styles = (
  style: string | undefined,
  color: string | undefined,
  size: number | undefined,
  dynamicSize: Animated.Value | undefined
): any => {
  const pulse = {
    position: "absolute",
    backgroundColor: color,
    height: dynamicSize,
    width: dynamicSize,
    borderRadius: 9999,
  };

  const elastic = {
    position: "absolute",
    backgroundColor: color,
    height: size,
    width: size,
    transform: [{ scaleY: dynamicSize }],
    borderRadius: 9999,
  };
  const flashing = {
    position: "absolute",
    backgroundColor: color,
    height: size,
    width: size,
    opacity: dynamicSize,
    borderRadius: 9999,
  };
  const typing = {
    position: "absolute",
    top: dynamicSize,
    backgroundColor: color,
    height: size,
    width: size,
    borderRadius: 9999,
  };
  const ping = {
    position: "absolute",
    opacity: dynamicSize,
    transform: [
      {
        scale: dynamicSize?.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
        }),
      },
    ],
    backgroundColor: color,
    height: size,
    width: size,
    borderRadius: 9999,
  };

  switch (style) {
    case "pulse":
      return pulse;
    case "elastic":
      return elastic;
    case "flashing":
      return flashing;
    case "typing":
      return typing;
    case "ping":
      return ping;
    default:
      return pulse;
  }
};
