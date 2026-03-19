import React from "react";
import { View, Text, FlatList } from "react-native";
import { tarefas } from "../Banco/banco";
import { TaskStyles } from "../styles/TaskStyles";

export default function TasksScreen() {
  return (
    <View style={TaskStyles.container}>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={TaskStyles.item}>
            <Text style={TaskStyles.title}>{item.title}</Text>
            <Text style={TaskStyles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}