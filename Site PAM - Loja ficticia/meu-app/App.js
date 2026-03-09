// Importa o React para poder criar componentes
import React from "react";

// Importa o container principal da navegação
// Ele controla todas as telas do aplicativo
import { NavigationContainer } from "@react-navigation/native";

// Importa o tipo de navegação "Stack"
// Stack funciona como uma pilha de telas (uma sobre a outra)
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importa a tela da lista de produtos
import HomeScreen from "./screens/HomeScreen";

// Importa a tela de detalhes do produto
import ProductScreen from "./screens/ProductScreen";

// Cria a estrutura de navegação Stack
// Stack será responsável por controlar as telas
const Stack = createNativeStackNavigator();

// Componente principal do aplicativo
export default function App() {

  // Retorna a estrutura da navegação
  return (

    // NavigationContainer envolve todo o sistema de navegação
    <NavigationContainer>

      {/* Stack.Navigator define todas as telas possíveis */}
      <Stack.Navigator>

        {/* Primeira tela do app */}
        <Stack.Screen
        
          // Nome interno da rota
          name="Home"

          // Componente que será exibido
          component={HomeScreen}

          // Opções da tela
          options={{ title: "Loja" }}
        />

        {/* Segunda tela do app */}
        <Stack.Screen
        
          // Nome da rota de detalhes
          name="Produto"

          // Tela que mostra os detalhes
          component={ProductScreen}

          // Título da barra superior
          options={{ title: "Detalhes" }}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );
}