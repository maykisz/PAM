
import React from "react";
import { FlatList } from "react-native";
import { produtos } from "../Banco/banco";
import Item from "../components/Item";

export default function HomeScreen({ navigation }) {

  return (
  
    <FlatList
      // dados que serão exibidos
      data={produtos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Item
        
          // envia todas as propriedades do produto
          {...item}

          onPress={() =>
            navigation.navigate("Produto",{ produto: item })
          }

        />
      )}
    />
  );
}