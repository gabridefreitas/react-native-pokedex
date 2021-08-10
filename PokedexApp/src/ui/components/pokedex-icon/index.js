import React from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';

import icoMoonConfig from './selection.json';

import {COLORS} from '../../common';

export function PokedexIcon(props) {
  const {size = 15, color = COLORS.WHITE, ...otherProps} = props;

  const Icon = createIconSetFromIcoMoon(icoMoonConfig);

  return <Icon size={size} color={color} {...otherProps} />;
}
