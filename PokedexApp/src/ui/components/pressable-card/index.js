import React from 'react';
import {Pressable} from 'react-native';

import {COLORS} from '../../common';
import styles from './styles';

export function PressableCard(props) {
  const {children, onPress, ...otherProps} = props;

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.pressableContainer,
        {
          backgroundColor: pressed
            ? COLORS.MEDIUM_BLUE
            : COLORS.VERY_LIGHT_GRAY,
        },
      ]}
      {...otherProps}>
      {children}
    </Pressable>
  );
}
