/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useMemo, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  // View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
// import Animated, {
//   Value,
//   useCode,
//   set,
//   cond,
//   block,
//   not,
//   clockRunning,
//   Clock,
//   startClock,
//   interpolate,
//   add,
//   Extrapolate,
//   eq,
//   stopClock,
// } from 'react-native-reanimated';
import LayoutFlexBox from './components/useTransaction';
import Timing from './components/Timing';
import PanGestureHandle from './components/PanGestureHandle';
import {View, useAnimationState} from 'moti';
const duration = 2000;

const App = () => {
  const [show, setShow] = useState(true);
  console.log('[1;34m --------------------------------------------------');
  console.log('[1;34m ~ file: App.js ~ line 43 ~ App ~ show', show);
  console.log('[1;34m --------------------------------------------------');

  // const {time, clock, progress} = useMemo(
  //   () => ({
  //     time: new Value(0),
  //     clock: new Clock(),
  //     progress: new Value(0),
  //   }),
  //   [],
  // );

  // const time = useRef(new Value(0)).current;
  // const clock = useRef(new Clock()).current;
  // const progress = useRef(new Value(0)).current;
  // const opacity = interpolate(progress, {
  //   inputRange: [0, 1],
  //   outputRange: show ? [0, 1] : [1, 0],
  //   extrapolate: Extrapolate.CLAMP,
  // });

  // useCode(
  //   () =>
  //     block([
  //       // check if clock not running start clock and set time = clock
  //       cond(not(clockRunning(clock)), [startClock(clock), set(time, clock)]),
  //       // calculate progress for animation
  //       set(
  //         progress,
  //         interpolate(clock, {
  //           inputRange: [time, add(time, duration)],
  //           outputRange: [0, 1],
  //           extrapolate: Extrapolate.CLAMP,
  //         }),
  //       ),
  //       // if animation is over stop the clock
  //       cond(eq(progress, 1), stopClock(clock)),
  //     ]),
  //   [show],
  // );

  // const animateState = useAnimationState({
  //   from: {
  //     scale: 1,
  //   },
  //   to: {
  //     scale: 2,
  //   },
  // });

  return (
    <View style={styles.container}>
      <View style={styles.shape} animate={{scale: show ? 1 : 2}} />
      <TouchableOpacity
        onPress={() => {
          setShow((pre) => !pre);
        }}>
        <Text>dfasd</Text>
      </TouchableOpacity>
    </View>
  );
  //   return (
  //     <View style={styles.container}>
  //       <Animated.View style={[styles.card, {opacity}]} />
  //       <TouchableOpacity
  //         activeOpacity={1}
  //         onPress={() => {
  //           setShow((pre) => !pre);
  //         }}>
  //         <Text>fsag</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 250,
    height: 70,
    backgroundColor: 'red',
  },
  shape: {
    width: 100,
    height: 100,
    borderRadius: 18,
    backgroundColor: 'red',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});

export default App;
