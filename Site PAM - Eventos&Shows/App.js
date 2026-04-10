import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Telas
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import TasksScreen from "./screens/TasksScreen";
import TaskDetailScreen from "./screens/TaskDetailScreen";
import DevelopersScreen from "./screens/DevelopersScreen";

// Estilos Globais
import { COLORS } from "./styles/CommonStyles";

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 140, height: 150, resizeMode: 'contain' }}
      source={require('./Foto de Perfil/logo/Logo Empresa-Photoroom (2).png')}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShadowVisible: false, // Remove aquela linha feia do cabeçalho
          headerStyle: { backgroundColor: COLORS.card },
          headerTitleStyle: { 
            fontWeight: '800', 
            fontSize: 18, 
            color: COLORS.textHeader 
          },
          headerTintColor: COLORS.primary, // Cor da seta de voltar
          headerBackTitleVisible: false,
          // Customizando o botão de voltar para todas as telas
          headerLeft: (props) => props.canGoBack ? (
            <TouchableOpacity onPress={props.onPress} style={{ marginLeft: -10 }}>
              <ChevronLeft color={COLORS.textHeader} size={28} />
            </TouchableOpacity>
          ) : null,
        }}
      >
        {/* Tela de Login: Totalmente limpa */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false, animation: 'fade' }}
        />
        
        {/* Home: Logo centralizada e sem botão de voltar */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ 
            headerTitle: () => <LogoTitle />,
            headerTitleAlign: 'center',
            headerLeft: () => <View />, // Remove a seta mesmo se houver histórico
            animation: 'slide_from_right'
          }}
        />

        <Stack.Screen
          name="Tarefas"
          component={TasksScreen}
          options={{ 
            title: "Minhas Tarefas",
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen
          name="DetalhesTarefa"
          component={TaskDetailScreen}
          options={{ 
            title: "Detalhes",
            headerTitleAlign: 'center',
            // Podemos esconder o header aqui se você usou o header customizado que fizemos na tela de detalhe
            headerShown: false 
          }}
        />

        <Stack.Screen
          name="Desenvolvedores"
          component={DevelopersScreen}
          options={{ 
            title: "Equipe",
            headerTitleAlign: 'center'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}