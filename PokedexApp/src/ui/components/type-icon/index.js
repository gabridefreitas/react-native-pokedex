import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {PokedexIcon} from '../';
import {getTypeColors} from '../../common';

import styles from './styles';

export function TypeIcon({type}) {
  return (
    <LinearGradient
      colors={getTypeColors(type).gradient}
      style={[
        styles.typeIconContainer,
        {shadowColor: getTypeColors(type).primary},
      ]}>
      <PokedexIcon name={type} />
    </LinearGradient>
  );
}
