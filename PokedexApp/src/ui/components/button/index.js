import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {getTypeColors} from '../../common';
import styles from './styles';

export function Button({title, type, onPress, isSelected}) {
  if (isSelected) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.buttonContainer,
          {backgroundColor: getTypeColors(type).primary},
        ]}>
        <Text style={styles.buttonTitleText}>{title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer]}>
      <Text
        style={[styles.buttonTitleText, {color: getTypeColors(type).primary}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
