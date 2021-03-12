import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Transitioning, Transition} from 'react-native-reanimated';
const {width} = Dimensions.get('screen');

const cardData = [
  {backgroundColor: 'red'},
  {backgroundColor: 'green'},
  {backgroundColor: 'blue'},
];

const layouts = [
  {
    id: 'row',
    layout: {
      container: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
  },
  {
    id: 'wrap',
    layout: {
      container: {
        flexWrap: 'wrap',

        flexDirection: 'row',
      },
      child: {
        flex: 0,
        width: width / 2 - 50,
      },
    },
  },
  {
    id: 'column',
    layout: {
      container: {
        flexDirection: 'column',
        alignItems: 'center',
      },
      child: {
        flex: 0,
        width: width / 2 - 50,
      },
    },
  },
];
const transaction = (
  <Transition.Change durationMs={400} interpolation="easeInOut" />
);

const LayoutFlexBox = () => {
  const [currentLayout, setCurrentLayout] = useState(layouts[0]);
  const ref = useRef(null);
  return (
    <>
      <Transitioning.View
        style={[styles.container, currentLayout.container]}
        ref={ref}
        transition={transaction}>
        {cardData.map((item, index) => (
          <View
            key={`${index}`}
            style={[
              styles.child,
              {
                backgroundColor: item.backgroundColor,
              },
              currentLayout.child,
            ]}
          />
        ))}
      </Transitioning.View>
      <View />
      {layouts.map((item, index) => (
        <TouchableOpacity
          key={index.toString()}
          onPress={() => {
            if (ref.current) {
              ref.current.animateNextTransition();
            }
            setCurrentLayout(item.layout);
          }}
          style={{
            width,
            height: 40,
            paddingHorizontal: 10,
          }}>
          <Text>{item.id}</Text>
        </TouchableOpacity>
      ))}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  child: {
    margin: 5,
    flex: 1,
    width: 100,
    height: 300,
  },
});
export default LayoutFlexBox;
