import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';

import {usePokemonApi} from '../../../services';
import {Loader, PokemonCard, ScreenContainer} from '../../components';

import styles from './styles';

export function PokemonListScreen(props) {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const pokemonApi = usePokemonApi();
  const {navigation} = props;

  useEffect(() => {
    async function getScreenData() {
      try {
        const {pokemons} = await pokemonApi.getPokemonsList();

        setPokemons(pokemons);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getScreenData();
  }, []);

  function handleOnPress(id) {
    navigation.navigate('PokemonDetailsScreen', {
      id,
    });
  }

  function renderPokemonCard(id, name, types, image) {
    return (
      <View style={styles.pokemonCard}>
        <PokemonCard
          id={id}
          name={name}
          types={types}
          image={image}
          onPress={() => handleOnPress(id)}
        />
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
          data={pokemons}
          renderItem={({item}) =>
            renderPokemonCard(item.id, item.name, item.types, item.image)
          }
          keyExtractor={item => item.id}
        />
      </ScreenContainer>
    );
  }

  return renderContent();
}
