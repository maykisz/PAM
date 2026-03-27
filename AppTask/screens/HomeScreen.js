import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { tarefas } from "../Banco/banco";
import { TaskStyles } from "../styles/TaskStyles";
import { styles } from "../styles/styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.homeHeader}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate("Desenvolvedores")}
        >
          <Text style={styles.homeButtonText}>Desenvolvedores</Text>
        </TouchableOpacity>
      </View>

      <View style={TaskStyles.container}>
        <FlatList
          data={tarefas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={TaskStyles.item}
              onPress={() => navigation.navigate("DetalhesTarefa", { tarefa: item })}
            >
              <Text style={TaskStyles.title}>{item.title}</Text>
              <Text style={TaskStyles.description}>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
