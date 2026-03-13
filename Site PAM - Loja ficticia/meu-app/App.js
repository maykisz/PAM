import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Tela inicial */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: "Loja" }}
        />

        {/* Tela de detalhes do produto */}
        <Stack.Screen 
          name="Produto" 
          component={ProductScreen} 
          options={{ title: "Detalhes" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}