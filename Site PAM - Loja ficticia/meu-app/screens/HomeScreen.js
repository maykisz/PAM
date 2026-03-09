// Importa React
import React from "react";

// Importa FlatList para criar listas performáticas
import { FlatList } from "react-native";

// Importa os dados do banco
import { produtos } from "../Banco/banco";

// Importa o componente do produto
import Item from "../components/Item";

// Cria a tela inicial
export default function HomeScreen({ navigation }) {

  // navigation é fornecido automaticamente pelo React Navigation
  // ele permite mudar de tela

  return (

    // FlatList renderiza a lista de produtos
    <FlatList

      // dados que serão exibidos
      data={produtos}

      // chave única de cada item
      keyExtractor={(item) => item.id}

      // função que renderiza cada produto
      renderItem={({ item }) => (

        <Item
        
          // envia todas as propriedades do produto
          {...item}

          // função executada ao clicar no produto
          onPress={() =>

            // navega para a tela Produto
            navigation.navigate(

              // nome da rota
              "Produto",

              // dados enviados para a próxima tela
              { produto: item }

            )

          }

        />

      )}

    />

  );
}