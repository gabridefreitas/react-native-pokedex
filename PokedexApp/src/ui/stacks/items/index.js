import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ItemDetailsScreen, ItemListScreen} from '../../screens';
import {HeaderStyle} from '../../common';

const Stack = createStackNavigator();

export function ItemsStack() {
  return (
    <Stack.Navigator screenOptions={HeaderStyle}>
      <Stack.Screen
        component={ItemListScreen}
        name="ItemListScreen"
        options={{title: 'Items'}}
      />
      <Stack.Screen
        component={ItemDetailsScreen}
        name="ItemDetailsScreen"
        options={{title: 'Item Details'}}
      />
    </Stack.Navigator>
  );
}
