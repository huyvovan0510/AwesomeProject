import React, {useRef} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {Value} from 'react-native-reanimated';

const PanGestureHandle = () => {
  const translationX = useRef(new Value(0)).current;
  const translationY = useRef(new Value(0)).current;

  const onGestureEvent = Animated.event([
    {
      nativeEvent: {
        translationX,
        translationY,
      },
    },
  ]);

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            styles.ball,
            {
              transform: [
                {translateX: translationX},
                {translateY: translationY},
              ],
            },
          ]}
        />
      </PanGestureHandler>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'red',
  },
});
export default PanGestureHandle;
