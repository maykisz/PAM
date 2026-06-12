import React from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import TaskForm from './TaskForm';
import styles from '../styles';

export default function TaskModal({
  developers,
  editingTaskId,
  onClose,
  onSave,
  onSuggestDescription,
  onUpdate,
  saving,
  suggesting,
  taskForm,
  visible,
}) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalBox}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>
              {editingTaskId ? 'Alterar tarefa' : 'Nova tarefa'}
            </Text>
            <Pressable onPress={onClose}>
              <Text style={styles.closeButton}>Fechar</Text>
            </Pressable>
          </View>

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
        </View>
      </View>
    </Modal>
  );
}
