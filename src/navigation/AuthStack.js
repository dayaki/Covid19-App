import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../screens/Landing';
import Intro from '../screens/Intro';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator headerMode="none" initialRouteName="Landing">
    <Stack.Screen name="Intro" component={Intro} />
    <Stack.Screen name="Landing" component={Landing} />
  </Stack.Navigator>
);

export default AuthStack;
