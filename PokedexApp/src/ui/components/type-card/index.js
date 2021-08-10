import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {PokedexIcon} from '../';
import {getTypeColors} from '../../common';

import styles from './styles';

export function TypeCard({type}) {
  return (
    <LinearGradient
      colors={getTypeColors(type).gradient}
      style={[
        styles.typeCardContainer,
        {shadowColor: getTypeColors(type).primary},
      ]}>
      <PokedexIcon name={type} size={40} />
    </LinearGradient>
  );
}
