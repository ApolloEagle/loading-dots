import React, { useState } from "react";
import { Animated } from "react-native";
import { useLoadingContext } from "./context";
import { Dot } from "./dot";
import { animationStyle } from "./animation-style";

const Container = (): JSX.Element => {
  const { style, dots, size } = useLoadingContext();

  const animatedValues = (style: string | undefined) => {
    switch (style) {
      case "pulse":
        return Number(0);
      case "elastic":
        return Number(1);
      case "flashing":
        return Number(size);
      case "typing":
        return Number(0);
      case "ping":
        return Number(1);
      default:
        return Number(0);
    }
  };
  const list = Array.from(
    Array(style === "ping" ? 1 : dots),
    () => new Animated.Value(animatedValues(style))
  );
  const [visible, setVisible] = useState(false);

  const animation = (nodes: Animated.Value[]) => {
    Animated.parallel(
      nodes.map((node, index) => animationStyle(style, node, index * 260, size))
    ).start(() => {
      setVisible(!visible);
    });
  };

  animation(list);

  return (
    <Animated.View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {list.map((size, index) => (
        <Dot key={index} dynamicSize={size} />
      ))}
    </Animated.View>
  );
};

export { Container };
