import React, { useContext, useState } from "react";
import { Animated } from "react-native";
import { LoadingDotContext } from "../loading-dots/loading-dots";
import Dot from "../dot/dot";

const Container = (): JSX.Element => {
  const { dots, size } = useContext(LoadingDotContext);
  const list = Array.from(Array(dots), () => new Animated.Value(0));
  const [visible, setVisible] = useState(false);

  const pulse = (node: Animated.Value, delay: number) => {
    const sequence = Animated.sequence([
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
    return sequence;
  };

  const animation = (nodes: Animated.Value[]) => {
    Animated.parallel(
      nodes.map((node, index) => pulse(node, index * 260))
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

export default Container;
