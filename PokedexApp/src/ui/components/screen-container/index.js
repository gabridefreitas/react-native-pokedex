import React from 'react';
import {View} from 'react-native';

import styles from './styles';

export function ScreenContainer({children}) {
  return <View style={styles.screenContainer}>{children}</View>;
}
