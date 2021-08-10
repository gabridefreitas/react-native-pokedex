import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {usePokemonApi} from '../../../services';
import {COLORS, formatName, formatText, NoHeaderStyle} from '../../common';
import {Loader, ScreenContainer, PokedexIcon} from '../../components';

import styles from './styles';

export function ItemDetailsScreen({route, navigation}) {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const pokemonApi = usePokemonApi();
  const {id} = route.params;
  const COIN = 'coin';

  useLayoutEffect(() => {
    navigation.setOptions(NoHeaderStyle);
  }, [navigation]);

  useEffect(() => {
    async function getScreenData() {
      try {
        const response = await pokemonApi.getItemDetails(id);

        setItem(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getScreenData();
  }, [id]);

  function renderItemName() {
    const formattedName = formatName(item.name);

    return <Text style={styles.itemNameText}>{formattedName}</Text>;
  }

  function renderItemEffect() {
    const formattedEffect = formatText(item.effect, /:|  /g, '\n');

    return <Text style={styles.itemEffectText}>{formattedEffect}</Text>;
  }

  function renderContent() {
    if (isLoading) {
      return <Loader />;
    }

    return (
      <ScreenContainer>
        <LinearGradient
          colors={[COLORS.MEDIUM_BLUE, COLORS.MEDIUM_CYAN, COLORS.MEDIUM_GREEN]}
          style={{flex: 1}}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <View style={styles.itemDetailsContainer}>
            <View style={styles.modalContainer}>
              <View style={styles.imageContainer}>
                <Image source={{uri: item.image}} style={styles.itemImage} />
              </View>
              {renderItemName()}
              <View style={styles.itemCostContainer}>
                <Text style={styles.itemCostText}>{item.cost}</Text>
                <PokedexIcon name={COIN} color={COLORS.MEDIUM_GRAY} />
              </View>
              {renderItemEffect()}
            </View>
          </View>
        </LinearGradient>
      </ScreenContainer>
    );
  }

  return renderContent();
}
