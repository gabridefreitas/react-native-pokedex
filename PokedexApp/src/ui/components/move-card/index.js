import React from 'react';
import {View, Text} from 'react-native';

import {PressableCard, TypeIcon} from '../';
import {formatName} from '../../common';

import styles from './styles';

export function MoveCard({name, type, onPress}) {
  function renderMoveName() {
    const formattedName = formatName(name);

    return <Text style={styles.moveNameText}>{formattedName}</Text>;
  }

  return (
    <PressableCard onPress={onPress}>
      <View style={styles.movesCardContainer}>
        {renderMoveName()}
        <TypeIcon type={type} />
      </View>
    </PressableCard>
  );
}
