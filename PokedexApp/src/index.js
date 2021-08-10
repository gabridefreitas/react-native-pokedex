import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MovesStack, ItemsStack, PokemonsStack} from './ui/stacks';
import {PokedexIcon} from './ui/components';
import {BottomTabStyle, COLORS} from './ui/common';

const BottomTab = createBottomTabNavigator();

export default function App() {
  function renderIconBottomTab(iconName, focused) {
    return (
      <PokedexIcon
        name={iconName}
        size={30}
        color={focused ? COLORS.BLACK : COLORS.MEDIUM_GRAY}
      />
    );
  }

  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={BottomTabStyle}>
        <BottomTab.Screen
          component={PokemonsStack}
          name="PokemonsStack"
          options={{
            title: 'Pokemons',
            tabBarIcon: ({focused}) => renderIconBottomTab('pokemon', focused),
          }}
        />
        <BottomTab.Screen
          component={MovesStack}
          name="MovesStack"
          options={{
            title: 'Moves',
            tabBarIcon: ({focused}) => renderIconBottomTab('moves', focused),
          }}
        />
        <BottomTab.Screen
          component={ItemsStack}
          name="ItemsStack"
          options={{
            title: 'Items',
            tabBarIcon: ({focused}) => renderIconBottomTab('itens', focused),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
