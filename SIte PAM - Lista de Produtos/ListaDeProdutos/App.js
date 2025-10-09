import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/Navegacao.js';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
