import React from 'react';
import {View, Text} from 'react-native';

import {getTypeColors} from '../../common';
import {PressableCard} from '../pressable-card';

import styles from './styles';

export function AbilityCard({name, effect, type}) {
  return (
    <PressableCard>
      <View style={styles.abilityCardContainer}>
        <Text
          style={[
            styles.abilityNameText,
            {color: getTypeColors(type).primary},
          ]}>
          {name}
        </Text>
        <Text style={styles.abilityEffectText}>{effect}</Text>
      </View>
    </PressableCard>
  );
}
