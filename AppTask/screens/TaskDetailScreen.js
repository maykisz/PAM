import React from "react";
import { View, Text } from "react-native";
import { TaskStyles } from "../styles/TaskStyles";

export default function TaskDetailScreen({ route }) {
  const { tarefa } = route.params || {};

  if (!tarefa) {
    return (
      <View style={TaskStyles.container}>
        <Text style={TaskStyles.title}>Tarefa não localizada</Text>
      </View>
    );
  }

  const statusLabel = tarefa.status || "Pendente";

  return (
    <View style={TaskStyles.container}>
      <View style={TaskStyles.item}>
        <Text style={TaskStyles.title}>{tarefa.title}</Text>
        <Text style={TaskStyles.description}>{tarefa.descricaoDetalhada || tarefa.description}</Text>
        <Text style={[TaskStyles.description, { marginTop: 12 }]}>Prazo de entrega: {tarefa.prazo}</Text>
        <Text style={[TaskStyles.description, { marginTop: 6 }]}>Status: {statusLabel}</Text>
      </View>
    </View>
  );
}
