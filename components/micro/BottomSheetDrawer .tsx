import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 100;

const BottomSheetDrawer = () => {
  const translateY = useSharedValue(0);
  const context = useSharedValue({
    y: 0,
  });
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {
        y: translateY.value,
      };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      /** 
        here the onEnd get call when we leave the gesture.
        you can play along with value to achieve what you 
      */
      if (translateY.value < -SCREEN_HEIGHT / 1.6) {
        translateY.value = MAX_TRANSLATE_Y;
      } else if (translateY.value > -SCREEN_HEIGHT / 4.5) {
        translateY.value = 0;
      }
    });

  const rBottomSheetStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  /** 
      for now I have used the useEffect for development purpose only
      later on we will trigger this component to be visible in UI.
  */
  useEffect(() => {
    translateY.value = -SCREEN_HEIGHT / 3.5;
  }, []);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, rBottomSheetStyles]}>
        <View style={styles.line} />
      </Animated.View>
    </GestureDetector>
  );
};

export default BottomSheetDrawer;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: SCREEN_HEIGHT,
    backgroundColor: "#6b7694",
    width: "100%",
    // here I have changed the top height as it was needed.
    top: SCREEN_HEIGHT,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  line: {
    height: 3,
    backgroundColor: "#ffffff",
    width: "28%",
    alignSelf: "center",
    marginVertical: 20,
  },
});