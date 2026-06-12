import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../styles';

function TaskItem({ item, onDelete, onEdit }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.titulo}</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>
      <Text style={styles.cardText}>{item.descricao}</Text>
      <Text style={styles.cardMeta}>
        Responsavel: {item.nomeDesenvolvedor || 'Sem responsavel'}
      </Text>

      <View style={styles.taskActions}>
        <Pressable style={styles.editButton} onPress={() => onEdit(item)}>
          <MaterialCommunityIcons name="pencil" size={18} color="#1d4ed8" />
          <Text style={styles.editButtonText}>Alterar</Text>
        </Pressable>

        <Pressable style={styles.deleteButton} onPress={() => onDelete(item)}>
          <MaterialCommunityIcons name="trash-can-outline" size={18} color="#b91c1c" />
          <Text style={styles.deleteButtonText}>Deletar</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function TasksScreen({ onCreate, onDelete, onEdit, tasks }) {
  return (
    <View style={styles.content}>
      <View style={styles.pageHeader}>
        <View>
          <Text style={styles.title}>Tarefas</Text>
          <Text style={styles.subtitle}>Lista carregada do banco de dados.</Text>
        </View>

        <Pressable style={styles.smallButton} onPress={onCreate}>
          <Text style={styles.smallButtonText}>Criar tarefa</Text>
        </Pressable>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => String(item.idTarefa)}
        renderItem={({ item }) => (
          <TaskItem item={item} onDelete={onDelete} onEdit={onEdit} />
        )}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma tarefa cadastrada.</Text>}
      />
    </View>
  );
}
