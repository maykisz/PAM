import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterStep1Screen from '../screens/RegisterStep1Screen';
import RegisterStep2Screen from '../screens/RegisterStep2Screen';
import HomeScreen from '../screens/HomeScreen';
import OnboardingWizard from '../screens/OnboardingWizard';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="RegisterStep1" 
        component={RegisterStep1Screen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="RegisterStep2" 
        component={RegisterStep2Screen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="onboardingWizard" 
        component={OnboardingWizard} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}