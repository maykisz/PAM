import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import TasksScreen from "./screens/TasksScreen";
import TaskDetailScreen from "./screens/TaskDetailScreen";
import DevelopersScreen from "./screens/DevelopersScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Eventos" }}
        />
        <Stack.Screen
          name="Tarefas"
          component={TasksScreen}
          options={{ title: "Tarefas" }}
        />
        <Stack.Screen
          name="DetalhesTarefa"
          component={TaskDetailScreen}
          options={{ title: "Detalhes da Tarefa" }}
        />
        <Stack.Screen
          name="Desenvolvedores"
          component={DevelopersScreen}
          options={{ title: "Desenvolvedores" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}