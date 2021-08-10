import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {MoveDetailsScreen, MoveListScreen} from '../../screens';
import {HeaderStyle} from '../../common';

const Stack = createStackNavigator();

export function MovesStack() {
  return (
    <Stack.Navigator screenOptions={HeaderStyle}>
      <Stack.Screen
        component={MoveListScreen}
        name="MoveListScreen"
        options={{title: 'Moves'}}
      />
      <Stack.Screen
        component={MoveDetailsScreen}
        name="MoveDetailsScreen"
        options={{title: 'Move Details'}}
      />
    </Stack.Navigator>
  );
}
