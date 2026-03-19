import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { eventos } from "../Banco/banco";
import Item from "../components/Item";
import { styles } from "../styles/styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.homeHeader}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate("Tarefas")}
        >
          <Text style={styles.homeButtonText}>Tarefas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate("Desenvolvedores")}
        >
          <Text style={styles.homeButtonText}>Desenvolvedores</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.gridRow}
        renderItem={({ item }) => (
          <Item {...item} onPress={() => navigation.navigate("Evento", { evento: item })} />
        )}
      />
    </View>
  );
}
