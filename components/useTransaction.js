import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Animated, {interpolate, multiply, not} from 'react-native-reanimated';
import {useTransition} from 'react-native-redash/lib/module/v1';
const {width} = Dimensions.get('screen');
const card = [
  {id: '1', color: 'red'},
  {id: '2', color: 'green'},
  {id: '3', color: 'blue'},
];
const transformOrigin = -1 * (width / 2 - 50 * 2);
const useTransactionComponent = () => {
  const [toggle, setToggle] = useState(0);
  const transition = useTransition(toggle, not(toggle), toggle);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {card.map((item, index) => {
          let direction = interpolate(index, {
            inputRange: [0, 1, 2],
            outputRange: [-1, 0, 1],
          });
          const rotate = multiply(
            direction,
            interpolate(transition, {
              inputRange: [0, 1],
              outputRange: [0, Math.PI / 6],
            }),
          );
          return (
            <Animated.View
              style={[
                styles.card,
                {
                  backgroundColor: item.color,
                  transform: [
                    {rotate: rotate},
                    {translateX: transformOrigin},
                    {translateX: -transformOrigin},
                  ],
                },
              ]}
              key={`${index}`}
            />
          );
        })}
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          setToggle(toggle ^ 1);
        }}>
        <Text>asdfasdf</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default useTransactionComponent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  card: {
    width: 300,
    height: 100,
    position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    // alignSelf: 'center',
  },
  btn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
