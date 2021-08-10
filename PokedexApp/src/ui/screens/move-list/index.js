import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';

import {usePokemonApi} from '../../../services';
import {Loader, MoveCard, ScreenContainer} from '../../components';

import styles from './styles';

export function MoveListScreen(props) {
  const [moves, setMoves] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const pokemonApi = usePokemonApi();
  const {navigation} = props;

  useEffect(() => {
    async function getScreenData() {
      try {
        const moves = await pokemonApi.getMovesList();

        setMoves(moves);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getScreenData();
  }, []);

  function handleOnPress(id) {
    navigation.navigate('MoveDetailsScreen', {
      id,
    });
  }

  function renderMoveCard(id, name, type) {
    return (
      <View style={styles.moveCard}>
        <MoveCard name={name} type={type} onPress={() => handleOnPress(id)} />
      </View>
    );
  }

  function renderContent() {
    if (isLoading) {
      return <Loader />;
    }

    return (
      <ScreenContainer>
        <FlatList
          data={moves}
          renderItem={({item}) => renderMoveCard(item.id, item.name, item.type)}
          keyExtractor={item => item.id}
        />
      </ScreenContainer>
    );
  }

  return renderContent();
}
