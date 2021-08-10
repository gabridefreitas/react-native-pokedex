import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import {COLORS} from '../../common';
import styles from './styles';

export function Loader() {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color={COLORS.MEDIUM_GREEN} />
    </View>
  );
}
