import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {usePokemonApi} from '../../../services';
import {NoHeaderStyle, formatName, getTypeColors} from '../../common';
import {
  Loader,
  ScreenContainer,
  TypeCard,
  TypeHorizontalCard,
} from '../../components';

import styles from './styles';

export function MoveDetailsScreen({route, navigation}) {
  const [move, setMove] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const pokemonApi = usePokemonApi();
  const {id} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions(NoHeaderStyle);
  }, [navigation]);

  useEffect(() => {
    async function getScreenData() {
      try {
        const response = await pokemonApi.getMoveDetails(id);

        setMove(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getScreenData();
  }, [id]);

  function renderMoveName() {
    const formattedName = formatName(move.name);

    return <Text style={styles.moveNameText}>{formattedName}</Text>;
  }

  function renderAccuracy() {
    return (
      <View style={styles.accuracyCard}>
        <Text
          style={[
            styles.attributeTitleText,
            {color: getTypeColors(move.type.name).primary},
          ]}>
          Accuracy
        </Text>
        <Text style={styles.moveInfoText}>{`${move.accuracy || 0}%`}</Text>
      </View>
    );
  }

  function renderInfoCard(title, value) {
    return (
      <View style={styles.infoCard}>
        <Text
          style={[
            styles.attributeTitleText,
            {color: getTypeColors(move.type.name).primary},
          ]}>
          {title}
        </Text>
        <Text style={styles.moveInfoText}>{value || 0}</Text>
      </View>
    );
  }

  function renderContent() {
    if (isLoading) {
      return <Loader />;
    }

    return (
      <ScreenContainer>
        <LinearGradient
          colors={getTypeColors(move.type.name).gradient}
          style={{flex: 1}}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <View style={styles.moveDetailsContainer}>
            <View style={styles.modalContainer}>
              <View style={styles.moveTypeContainer}>
                <TypeCard type={move.type.name} />
              </View>
              {renderMoveName()}
              <View style={styles.moveEffectContainer}>
                <TypeHorizontalCard type={move.type.name} />
                <Text style={styles.moveEffectText}>{move.effect}</Text>
              </View>
              <View style={styles.moveInfoContainer}>
                {renderInfoCard('Base Power', move.power)}
                {renderAccuracy()}
                {renderInfoCard('PP', move.pp)}
              </View>
            </View>
          </View>
        </LinearGradient>
      </ScreenContainer>
    );
  }

  return renderContent();
}
