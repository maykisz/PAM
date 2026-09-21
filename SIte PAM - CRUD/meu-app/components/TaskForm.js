import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { taskStatusOptions } from '../constants';
import styles from '../styles';

export default function TaskForm({
  developers,
  editingTaskId,
  onSave,
  onSuggestDescription,
  onUpdate,
  saving,
  suggesting,
  taskForm,
}) {
  const renderDeveloperOption = (developer) => {
    const selected = taskForm.idDesenvolvedor === String(developer.idDesenvolvedor);

    return (
      <Pressable
        key={developer.idDesenvolvedor}
        style={[styles.optionButton, selected && styles.optionButtonSelected]}
        onPress={() => onUpdate('idDesenvolvedor', String(developer.idDesenvolvedor))}
      >
        <Text style={[styles.optionText, selected && styles.optionTextSelected]}>
          {developer.nomeDesenvolvedor}
        </Text>
      </Pressable>
    );
  };

  const renderStatusOption = (status) => {
    const selected = taskForm.status === status;

    return (
      <Pressable
        key={status}
        style={[styles.optionButton, selected && styles.optionButtonSelected]}
        onPress={() => onUpdate('status', status)}
      >
        <Text style={[styles.optionText, selected && styles.optionTextSelected]}>
          {status}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.form}>
      <Text style={styles.label}>Titulo</Text>
      <TextInput
        style={styles.input}
        value={taskForm.titulo}
        onChangeText={(value) => onUpdate('titulo', value)}
        placeholder="Ex: Criar tela de login"
      />

      <Text style={styles.label}>Descricao</Text>
      <Pressable
        style={[styles.aiButton, suggesting && styles.buttonDisabled]}
        onPress={onSuggestDescription}
        disabled={suggesting}
      >
        <MaterialCommunityIcons name="robot-outline" size={18} color="#6d28d9" />
        <Text style={styles.aiButtonText}>
          {suggesting ? 'IA gerando...' : 'IA sugere descricao'}
        </Text>
      </Pressable>

      <TextInput
        style={[styles.input, styles.textArea]}
        value={taskForm.descricao}
        onChangeText={(value) => onUpdate('descricao', value)}
        placeholder="Descreva a tarefa"
        multiline
      />

      <Text style={styles.label}>Desenvolvedor</Text>
      <View style={styles.optionGroup}>
        {developers.map(renderDeveloperOption)}
      </View>

      {editingTaskId ? (
        <>
          <Text style={styles.label}>Status</Text>
          <View style={styles.optionGroup}>
            {taskStatusOptions.map(renderStatusOption)}
          </View>
        </>
      ) : null}

      <Pressable
        style={[styles.primaryButton, saving && styles.buttonDisabled]}
        onPress={onSave}
        disabled={saving}
      >
        <Text style={styles.primaryButtonText}>
          {saving ? 'Salvando...' : editingTaskId ? 'Salvar alteracoes' : 'Salvar tarefa'}
        </Text>
      </Pressable>
    </View>
  );
}
