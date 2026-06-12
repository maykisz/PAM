import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import axios from 'axios';
import NavButton from './components/NavButton';
import TaskModal from './components/TaskModal';
import { API_URL, emptyTaskForm } from './constants';
import CreateTaskScreen from './screens/CreateTaskScreen';
import DevelopersScreen from './screens/DevelopersScreen';
import TasksScreen from './screens/TasksScreen';
import styles from './styles';

export default function App() {
  const [page, setPage] = useState('tasks');
  const [tasks, setTasks] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [suggesting, setSuggesting] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [taskForm, setTaskForm] = useState(emptyTaskForm);
  const [message, setMessage] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [tasksResponse, developersResponse] = await Promise.all([
        axios.get(`${API_URL}/tasks`),
        axios.get(`${API_URL}/developers`),
      ]);

      setTasks(tasksResponse.data);
      setDevelopers(developersResponse.data);
    } catch (error) {
      setMessage('Nao foi possivel carregar os dados do banco.');
      console.error('Erro ao carregar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateTaskForm = (field, value) => {
    setTaskForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  };

  const suggestDescription = async () => {
    if (!taskForm.titulo) {
      setMessage('Digite o titulo da tarefa antes de pedir a sugestao da IA.');
      return;
    }

    try {
      setSuggesting(true);
      setMessage('');
      const response = await axios.post(`${API_URL}/ai/task-description`, {
        titulo: taskForm.titulo,
      });

      updateTaskForm('descricao', response.data.descricao);
      setMessage('Descricao sugerida pela IA.');
    } catch (error) {
      const apiMessage = error.response?.data?.error;
      setMessage(apiMessage || 'Erro ao gerar descricao com IA.');
      console.error('Erro ao sugerir descricao:', error);
    } finally {
      setSuggesting(false);
    }
  };

  const saveTask = async () => {
    if (!taskForm.titulo || !taskForm.descricao || !taskForm.idDesenvolvedor) {
      setMessage('Preencha titulo, descricao e desenvolvedor.');
      return;
    }

    try {
      setSaving(true);
      setMessage('');

      const payload = {
        titulo: taskForm.titulo,
        descricao: taskForm.descricao,
        idDesenvolvedor: Number(taskForm.idDesenvolvedor),
      };

      if (editingTaskId) {
        await axios.put(`${API_URL}/tasks/${editingTaskId}`, {
          ...payload,
          status: taskForm.status || 'pendente',
        });
      } else {
        await axios.post(`${API_URL}/tasks`, payload);
      }

      setMessage(editingTaskId ? 'Tarefa alterada com sucesso.' : 'Tarefa criada com sucesso.');
      closeTaskModal();
      await loadData();
      setPage('tasks');
    } catch (error) {
      setMessage(editingTaskId ? 'Erro ao alterar tarefa no banco.' : 'Erro ao criar tarefa no banco.');
      console.error('Erro ao salvar tarefa:', error);
    } finally {
      setSaving(false);
    }
  };

  const openCreateTaskModal = () => {
    setTaskForm(emptyTaskForm);
    setEditingTaskId(null);
    setMessage('');
    setModalVisible(true);
  };

  const closeTaskModal = () => {
    setModalVisible(false);
    setEditingTaskId(null);
    setTaskForm(emptyTaskForm);
  };

  const openEditTaskModal = (task) => {
    setTaskForm({
      titulo: task.titulo,
      descricao: task.descricao,
      idDesenvolvedor: String(task.idDesenvolvedor),
      status: task.status || 'pendente',
    });
    setEditingTaskId(task.idTarefa);
    setMessage('');
    setModalVisible(true);
  };

  const deleteTask = async (task) => {
    const confirmed =
      typeof globalThis.confirm === 'function'
        ? globalThis.confirm(`Apagar a tarefa "${task.titulo}"?`)
        : true;

    if (!confirmed) {
      return;
    }

    try {
      setMessage('');
      await axios.delete(`${API_URL}/tasks/${task.idTarefa}`);
      setMessage('Tarefa apagada com sucesso.');
      await loadData();
    } catch (error) {
      setMessage('Erro ao apagar tarefa no banco.');
      console.error('Erro ao apagar tarefa:', error);
    }
  };

  const renderPage = () => {
    if (page === 'create') {
      return (
        <CreateTaskScreen
          developers={developers}
          editingTaskId={editingTaskId}
          onSave={saveTask}
          onSuggestDescription={suggestDescription}
          onUpdate={updateTaskForm}
          saving={saving}
          suggesting={suggesting}
          taskForm={taskForm}
        />
      );
    }

    if (page === 'developers') {
      return <DevelopersScreen developers={developers} />;
    }

    return (
      <TasksScreen
        onCreate={openCreateTaskModal}
        onDelete={deleteTask}
        onEdit={openEditTaskModal}
        tasks={tasks}
      />
    );
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <NavButton label="Criar" page={page} targetPage="create" onPress={setPage} />
        <NavButton label="Tarefas" page={page} targetPage="tasks" onPress={setPage} />
        <NavButton label="Dev" page={page} targetPage="developers" onPress={setPage} />
      </View>

      {message ? <Text style={styles.message}>{message}</Text> : null}

      {renderPage()}

      <TaskModal
        developers={developers}
        editingTaskId={editingTaskId}
        onClose={closeTaskModal}
        onSave={saveTask}
        onSuggestDescription={suggestDescription}
        onUpdate={updateTaskForm}
        saving={saving}
        suggesting={suggesting}
        taskForm={taskForm}
        visible={modalVisible}
      />
    </SafeAreaView>
  );
}
