import React from 'react';
import {View, Text} from 'react-native';

import {PokedexIcon} from '../';
import {getTypeColors} from '../../common';

import styles from './styles';

export function TypeHorizontalCard({type}) {
  return (
    <View
      style={[
        styles.typeHorizontalCardContainer,
        {
          backgroundColor: getTypeColors(type).primary,
          shadowColor: getTypeColors(type).primary,
        },
      ]}>
      <PokedexIcon name={type} />
      <Text style={styles.typeText}>{type}</Text>
    </View>
  );
}
