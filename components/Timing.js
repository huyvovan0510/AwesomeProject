import React, {useMemo, useState, useRef} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {
  block,
  Extrapolate,
  interpolate,
  useCode,
  Value,
  set,
  Clock,
  timing,
  Easing,
  not,
  clockRunning,
  startClock,
  cond,
  eq,
  and,
  stopClock,
} from 'react-native-reanimated';

const runningClock = (clock) => {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    frameTime: new Value(0),
    time: new Value(0),
  };
  const config = {
    toValue: new Value(1),
    duration: 1000,
    easing: Easing.linear,
  };
  return block([
    // cond(not(clockRunning(clock)), startClock(clock)),
    timing(clock, state, config),
    cond(eq(state.finished, 1), [
      set(state.finished, 0),
      set(state.frameTime, 0),
      set(state.time, 0),
      set(config.toValue, cond(eq(state.position, 1), 0, 1)),
    ]),
    state.position,
  ]);
};
const data = [0, 1, 2];
const Timing = () => {
  const [playing, setPlaying] = useState(false);
  const process = useRef(new Value(0)).current;
  const clock = useRef(new Clock(0)).current;
  const isPlay = useRef(new Value(0)).current;
  isPlay.setValue(playing);

  useCode(
    block([
      cond(and(eq(isPlay, false), clockRunning(clock)), stopClock(clock)),
      cond(and(eq(isPlay, true), not(clockRunning(clock))), startClock(clock)),
      set(process, runningClock(clock)),
    ]),
    [],
  );
  return (
    <>
      <View style={styles.container}>
        {data.map((item) => {
          const delta = 1 / data.length;
          const start = item * delta;
          const end = start + delta;
          const scale = interpolate(process, {
            inputRange: [start, end],
            outputRange: [1, 1.5],
            extrapolate: Extrapolate.CLAMP,
          });

          return (
            <Animated.View
              style={[
                styles.item,
                {
                  transform: [
                    {
                      scale,
                    },
                  ],
                },
              ]}>
              <Animated.Text
                style={{
                  color: '#fff',
                  transform: [
                    {
                      scale,
                    },
                  ],
                }}>
                {item}
              </Animated.Text>
            </Animated.View>
          );
        })}
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          height: 50,
          marginBottom: 24,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          setPlaying(!playing);
        }}>
        <Text>{playing ? 'pause' : 'run'}</Text>
      </TouchableOpacity>
    </>
  );
};
export default Timing;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  item: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 25,
    margin: 15,
  },
});
