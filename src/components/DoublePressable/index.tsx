import React from 'react';
import {Pressable} from 'react-native';

interface IDoublePressable {
  onDoublePress?: () => void;
  children: React.ReactNode;
}

const DoublePressable = ({
  onDoublePress = () => {},
  children,
}: IDoublePressable) => {
  let lastPress: number | undefined;

  const handleDoublePress = () => {
    const ONE_SECOND = 1000;
    const DOUBLE_PRESS_DELAY = 300;
    const now = new Date().getTime();

    if (lastPress && now - lastPress < DOUBLE_PRESS_DELAY) {
      onDoublePress();
    }

    lastPress = now;

    setTimeout(() => {
      lastPress = undefined;
    }, ONE_SECOND);
  };

  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};
export default DoublePressable;
