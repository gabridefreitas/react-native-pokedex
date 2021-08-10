import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {PokemonDetailsScreen, PokemonListScreen} from '../../screens';
import {HeaderStyle} from '../../common';

const Stack = createStackNavigator();

export function PokemonsStack() {
  return (
    <Stack.Navigator screenOptions={HeaderStyle}>
      <Stack.Screen
        component={PokemonListScreen}
        name="PokemonListScreen"
        options={{title: 'Pokemons'}}
      />
      <Stack.Screen
        component={PokemonDetailsScreen}
        name="PokemonDetailsScreen"
        options={{title: 'Pokemon Details'}}
      />
    </Stack.Navigator>
  );
}
