import React from "react";
import { Animated, View } from "react-native";
import { useLoadingContext } from "./context";
import { styles } from "./animation-style";

const Dot = ({ dynamicSize }: { dynamicSize: Animated.Value }): JSX.Element => {
  const { style, color, size, spacing } = useLoadingContext();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: size,
        width: size,
        margin: spacing,
      }}
    >
      <Animated.View style={styles(style, color, size, dynamicSize)} />
    </View>
  );
};

export { Dot };
