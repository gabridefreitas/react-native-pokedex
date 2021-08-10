import React, {useEffect, useState, useLayoutEffect} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {usePokemonApi} from '../../../services';
import {NoHeaderStyle, getTypeColors} from '../../common';
import {
  AbilityCard,
  Button,
  Loader,
  ScreenContainer,
  TypeHorizontalCard,
  MoveCard,
  StatusInfo,
} from '../../components';

import styles from './styles';

export function PokemonDetailsScreen({route, navigation}) {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [showStats, setShowStats] = useState(true);
  const [showAbilities, setShowAbilities] = useState(false);
  const [showMoves, setShowMoves] = useState(false);
  const pokemonApi = usePokemonApi();
  const {id} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions(NoHeaderStyle);
  }, [navigation]);

  useEffect(() => {
    async function getScreenData() {
      try {
        const response = await pokemonApi.getPokemonDetails(id);

        setPokemon(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getScreenData();
  }, [id, pokemonApi]);

  function renderTypeHorizontalCards() {
    return pokemon.types.map((type, index) => (
      <View style={styles.pokemontTypeHorizontalCard} key={index}>
        <TypeHorizontalCard type={type} />
      </View>
    ));
  }

  function handleOnPressStats() {
    setShowStats(true);
    setShowAbilities(false);
    setShowMoves(false);
  }

  function handleOnPressAbilities() {
    setShowStats(false);
    setShowAbilities(true);
    setShowMoves(false);
  }

  function handleOnPressMoves() {
    setShowStats(false);
    setShowAbilities(false);
    setShowMoves(true);
  }

  function renderButtons() {
    return (
      <View style={styles.buttonsContainer}>
        <Button
          type={pokemon.types[0]}
          title={'STATS'}
          isSelected={showStats}
          onPress={handleOnPressStats}
        />
        <Button
          type={pokemon.types[0]}
          title={'ABILITIES'}
          isSelected={showAbilities}
          onPress={handleOnPressAbilities}
        />
        <Button
          type={pokemon.types[0]}
          title={'MOVES'}
          isSelected={showMoves}
          onPress={handleOnPressMoves}
        />
      </View>
    );
  }

  function renderStats() {
    return <StatusInfo stats={pokemon.stats} type={pokemon.types[0]} />;
  }

  function renderAbilityCard(name, effect) {
    return <AbilityCard name={name} effect={effect} type={pokemon.types[0]} />;
  }

  function renderAbilities() {
    return (
      <FlatList
        data={pokemon.abilities}
        renderItem={({item}) => renderAbilityCard(item.name, item.effect)}
        keyExtractor={(item, index) => index}
        style={styles.listStyle}
      />
    );
  }

  function renderMoveCard(name, type) {
    return <MoveCard name={name} type={type} onPress={() => {}} />;
  }

  function renderMoves() {
    return (
      <FlatList
        data={pokemon.moves}
        renderItem={({item}) => renderMoveCard(item.name, item.type.name)}
        keyExtractor={(item, index) => index}
        style={styles.listStyle}
      />
    );
  }

  function checkPokemonInfoToRender() {
    if (showStats) {
      return renderStats();
    }

    if (showAbilities) {
      return renderAbilities();
    }

    if (showMoves) {
      return renderMoves();
    }
  }

  function renderContent() {
    if (isLoading) {
      return <Loader />;
    }

    return (
      <ScreenContainer>
        <LinearGradient
          colors={getTypeColors(pokemon.types[0]).gradient}
          style={{flex: 1}}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <View style={styles.pokemonDetailsContainer}>
            <View style={styles.modalContainer}>
              <View style={styles.pokemonImageContainer}>
                <Image
                  style={styles.pokemonImage}
                  source={{uri: pokemon.image}}
                />
              </View>
              <Text style={styles.pokemonNameText}>{pokemon.name}</Text>
              <View style={styles.pokemonTypesContainer}>
                {renderTypeHorizontalCards()}
              </View>
              <Text style={styles.pokemonDescriptionText}>
                {pokemon.description}
              </Text>
              {renderButtons()}
              {checkPokemonInfoToRender()}
            </View>
          </View>
        </LinearGradient>
      </ScreenContainer>
    );
  }

  return renderContent();
}
