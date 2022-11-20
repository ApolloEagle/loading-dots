import React, { useContext, useState } from "react";
import { Animated } from "react-native";
import { LoadingDotContext } from "../context";
import { Dot } from "./dot";
import { animationStyle } from "./animation-style";

const Container = (): JSX.Element => {
  const { dots, size, style } = useContext(LoadingDotContext);
  const list = Array.from(Array(dots), () => new Animated.Value(0));
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
        <Dot key={index} size={size} />
      ))}
    </Animated.View>
  );
};

export { Container };
