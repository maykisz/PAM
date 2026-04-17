import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterStep1Screen from '../screens/RegisterStep1Screen';
import HomeScreen from '../screens/HomeScreen';
import RegisterStep2Screen from '../screens/RegisterStep2Screen';
import OnboardingWizard from '../screens/OnboardingWizard';

const Stack = createNativeStackNavigator();

// Define a pilha de navegação do app.
// Cada tela pode navegar para outra usando os nomes registrados aqui.
export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="RegisterStep1" component={RegisterStep1Screen} />
      <Stack.Screen name="RegisterStep2" component={RegisterStep2Screen} />
      <Stack.Screen name="OnboardingWizard" component={OnboardingWizard} />
    </Stack.Navigator>
  );
}
