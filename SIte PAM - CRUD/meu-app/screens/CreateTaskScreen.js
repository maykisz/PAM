import React from 'react';
import { ScrollView, Text } from 'react-native';
import TaskForm from '../components/TaskForm';
import styles from '../styles';

export default function CreateTaskScreen({
  developers,
  editingTaskId,
  onSave,
  onSuggestDescription,
  onUpdate,
  saving,
  suggesting,
  taskForm,
}) {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.title}>Criar Tarefa</Text>
      <Text style={styles.subtitle}>Cadastre uma tarefa e vincule a um desenvolvedor.</Text>
      <TaskForm
        developers={developers}
        editingTaskId={editingTaskId}
        onSave={onSave}
        onSuggestDescription={onSuggestDescription}
        onUpdate={onUpdate}
        saving={saving}
        suggesting={suggesting}
        taskForm={taskForm}
      />
    </ScrollView>
  );
}
