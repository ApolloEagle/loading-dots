import { useEffect } from "react";
import { Animated, View, StyleSheet } from "react-native";
import { AnimationTypes, LoadingDotsProps } from "../types";
import { animations } from "./animations";
import Dot from "./dot";

const LoadingDots = ({
  dotNumber = 3,
  animation = AnimationTypes.ELASTIC,
  size = 20,
  color = "rgb(25,203,229)",
  delay = 400,
  duration = 150,
  spacing = size / 3,
}: LoadingDotsProps) => {
  const animationValues = Array.from(
    Array(dotNumber),
    () => new Animated.Value(0)
  );

  useEffect(() => {
    const animationsArray = animationValues.map((animationValue, index) => {
      const animationType = animations(
        animation,
        animationValue,
        delay + index,
        duration,
        size
      );

      return Animated.sequence([
        Animated.delay(index * delay),
        Animated.loop(animationType),
      ]);
    });

    Animated.parallel(animationsArray).start();
  }, [animation, dotNumber, delay, duration, size, animationValues]);

  return (
    <View style={styles.container}>
      {animationValues.map((animationValue) => (
        <Dot
          key={Math.random()}
          animationValue={animationValue}
          animationType={animation}
          size={size}
          color={color}
          spacing={spacing}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingDots;
