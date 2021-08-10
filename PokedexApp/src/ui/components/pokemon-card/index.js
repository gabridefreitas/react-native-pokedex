import React from 'react';
import {View, Text, Image} from 'react-native';

import {PressableCard} from '../';
import {TypeIcon} from '../type-icon';

import styles from './styles';

export function PokemonCard({id, name, types, image, onPress}) {
  const PAD_START_ID = 3;

  function formatId() {
    return `#${id.toString().padStart(PAD_START_ID, '0')}`;
  }

  function renderTypesIcons() {
    return types.map((type, index) => (
      <View style={styles.typeIconContainer} key={index}>
        <TypeIcon type={type} />
      </View>
    ));
  }

  return (
    <PressableCard onPress={onPress}>
      <View style={styles.pokeCardLeftContainer}>
        <View style={styles.pokeImageContainer}>
          <Image source={{uri: image}} style={styles.pokeImage} />
        </View>
        <View style={styles.pokeInfoContainer}>
          <Text style={styles.pokeNameText}>{name}</Text>
          <Text style={styles.pokeIdText}>{formatId()}</Text>
        </View>
      </View>
      <View style={styles.pokeCardRightContainer}>
        <View style={styles.pokeTypesContainer}>{renderTypesIcons()}</View>
      </View>
    </PressableCard>
  );
}
