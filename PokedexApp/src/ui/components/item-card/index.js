import React from 'react';
import {View, Text, Image} from 'react-native';

import {PokedexIcon, PressableCard} from '../';
import {COLORS, formatName} from '../../common';

import styles from './styles';

export function ItemCard({name, image, cost, onPress}) {
  const COIN = 'coin';

  function renderItemName() {
    const formattedName = formatName(name);

    return <Text style={styles.itemNameText}>{formattedName}</Text>;
  }

  return (
    <PressableCard onPress={onPress}>
      <View style={styles.itemCardLeftContainer}>
        <View style={styles.itemImageContainer}>
          <Image source={{uri: image}} style={styles.itemImage} />
        </View>
        <View style={styles.itemInfoContainer}>{renderItemName()}</View>
      </View>
      <View style={styles.itemCardRightContainer}>
        <View style={styles.itemCostContainer}>
          <Text style={styles.itemCostText}>{cost}</Text>
          <PokedexIcon
            name={COIN}
            color={COLORS.DARK_GRAY}
            style={styles.pokedexIcon}
          />
        </View>
      </View>
    </PressableCard>
  );
}
