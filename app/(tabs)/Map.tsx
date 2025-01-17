import React, { useRef } from 'react';
import { StyleSheet, View, Animated, Dimensions } from 'react-native';
import { PinchGestureHandler, PanGestureHandler, State, TapGestureHandler } from 'react-native-gesture-handler';

const screen = Dimensions.get('window');
const DOUBLE_TAP_SCALE = 2; // Zoom level for double tap

export default function Map() {
  const baseScale = useRef(new Animated.Value(1)).current;
  const pinchScale = useRef(new Animated.Value(1)).current;
  const scale = Animated.multiply(baseScale, pinchScale);
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const lastScale = useRef(1);
  const lastX = useRef(0);
  const lastY = useRef(0);
  const doubleTapRef = useRef();

  // Marker location in map coordinates
  const markerLocation = { x: 112, y: -434 };

  const onPinchGestureEvent = Animated.event(
    [{ nativeEvent: { scale: pinchScale } }],
    { useNativeDriver: true }
  );

  const onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  const onDoubleTap = (event) => {
    const { x, y } = event.nativeEvent;

    lastScale.current = lastScale.current === 1 ? DOUBLE_TAP_SCALE : 1;

    Animated.spring(baseScale, {
      toValue: lastScale.current,
      useNativeDriver: true,
      stiffness: 1000,
      damping: 500,
      mass: 3,
    }).start();

    // Center the zoom on tap location
    if (lastScale.current === DOUBLE_TAP_SCALE) {
      const centerX = x - screen.width / 2;
      const centerY = y - screen.height / 2;

      translateX.setOffset(centerX);
      translateY.setOffset(centerY);
    } else {
      translateX.setOffset(0);
      translateY.setOffset(0);
    }
  };

  const onPinchStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      lastScale.current *= event.nativeEvent.scale;
      baseScale.setValue(lastScale.current);
      pinchScale.setValue(1);
    }
  };

  const onPanStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      lastX.current += event.nativeEvent.translationX;
      lastY.current += event.nativeEvent.translationY;
      translateX.setOffset(lastX.current);
      translateY.setOffset(lastY.current);
      translateX.setValue(0);
      translateY.setValue(0);
    }
  };

  return (
    <View style={styles.container}>
      <TapGestureHandler
        ref={doubleTapRef}
        numberOfTaps={2}
        onActivated={onDoubleTap}
      >
        <Animated.View>
          <PanGestureHandler
            minPointers={1}
            maxPointers={1}
            onGestureEvent={onPanGestureEvent}
            onHandlerStateChange={onPanStateChange}
          >
            <Animated.View>
              <PinchGestureHandler
                onGestureEvent={onPinchGestureEvent}
                onHandlerStateChange={onPinchStateChange}
              >
                <Animated.View>
                  {/* Map Image */}
                  <Animated.Image
                    source={require('../../assets/map_1.jpg')}
                    style={[
                      styles.image,
                      {
                        transform: [
                          { translateX },
                          { translateY },
                          { scale },
                        ],
                      },
                    ]}
                    resizeMode="contain"
                  />

                  {/* Marker */}
                  <Animated.View
                    style={[
                      styles.marker,
                      {
                        transform: [
                          // Translate marker based on map transformations
                          {
                            translateX: Animated.add(
                              Animated.multiply(30, scale),
                              translateX
                            ),
                          },
                          {
                            translateY: Animated.add(
                              Animated.multiply(10, scale),
                              translateY
                            ),
                          },
                          { scale }, // Scale the marker
                        ],
                      },
                    ]}
                  />
                </Animated.View>
              </PinchGestureHandler>
            </Animated.View>
          </PanGestureHandler>
        </Animated.View>
      </TapGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10253a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: screen.width,
    height: screen.width,
  },
  marker: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
});
