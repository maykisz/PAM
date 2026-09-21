import React, { useEffect, useState } from 'react';

import {
  ActivityIndicator,
  Alert,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import axios from 'axios';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import TaskModal from './components/TaskModal';

import { API_URL, emptyTaskForm } from './constants';

import BottomNavigation from './screens/BottomNavigation';
import CreateTaskScreen from './screens/CreateTaskScreen';
import DevelopersScreen from './screens/DevelopersScreen';
import LoginScreen from './screens/LoginScreen';
import TasksScreen from './screens/TasksScreen';

import styles from './App.css';

export default function App() {
  const [page, setPage] = useState('tasks');

  const [tasks, setTasks] = useState([]);
  const [developers, setDevelopers] = useState([]);

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [suggesting, setSuggesting] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const [editingTaskId, setEditingTaskId] = useState(null);

  const [taskForm, setTaskForm] = useState({
    ...emptyTaskForm,
  });

  const [message, setMessage] = useState('');

  const [user, setUser] = useState(null);

  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  // =====================================================
  // CARREGAMENTO
  // =====================================================

  useEffect(() => {
    if (!user) {
      return;
    }

    loadData();
  }, [user]);

  // =====================================================
  // AUTH
  // =====================================================

  const authConfig = () => ({
    headers: {
      'x-user-id': String(user?.idLogin ?? ''),
    },
  });

  const login = async (email, senha) => {
    try {
      setLoginLoading(true);
      setLoginError('');

      const response = await axios.post(
        `${API_URL}/login`,
        {
          email,
          senha,
        },
      );

      setUser(response.data);

      setPage('tasks');

      setMessage('');
    } catch (error) {
      const apiMessage =
        error?.response?.data?.error;

      setLoginError(
        apiMessage ||
          'Não foi possível entrar.',
      );
    } finally {
      setLoginLoading(false);
    }
  };

  const logout = () => {
    setUser(null);

    setPage('tasks');

    setTasks([]);
    setDevelopers([]);

    setMessage('');

    setModalVisible(false);

    setEditingTaskId(null);

    setTaskForm({
      ...emptyTaskForm,
    });

    setLoginError('');
  };

  // =====================================================
  // BANCO
  // =====================================================

  const loadData = async () => {
    try {
      setLoading(true);
      setMessage('');

      const [
        tasksResponse,
        developersResponse,
      ] = await Promise.all([
        axios.get(
          `${API_URL}/tasks`,
          authConfig(),
        ),

        axios.get(
          `${API_URL}/developers`,
        ),
      ]);

      setTasks(tasksResponse.data);
      setDevelopers(
        developersResponse.data,
      );
    } catch (error) {
      console.error(
        'Erro ao carregar dados:',
        error,
      );

      setMessage(
        'Não foi possível carregar os dados.',
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // FORM
  // =====================================================

  const updateTaskForm = (
    field,
    value,
  ) => {
    setTaskForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  };

  const resetTaskForm = () => {
    setTaskForm({
      ...emptyTaskForm,
    });

    setEditingTaskId(null);
  };

  // =====================================================
  // IA
  // =====================================================

  const suggestDescription = async () => {
    if (!taskForm.titulo?.trim()) {
      setMessage(
        'Digite o título da tarefa antes de pedir uma sugestão.',
      );

      return;
    }

    try {
      setSuggesting(true);
      setMessage('');

      const response = await axios.post(
        `${API_URL}/ai/task-description`,
        {
          titulo: taskForm.titulo,
        },
      );

      updateTaskForm(
        'descricao',
        response.data.descricao,
      );

      setMessage(
        'Descrição sugerida pela IA.',
      );
    } catch (error) {
      console.error(
        'Erro ao sugerir descrição:',
        error,
      );

      const apiMessage =
        error?.response?.data?.error;

      setMessage(
        apiMessage ||
          'Erro ao gerar descrição com IA.',
      );
    } finally {
      setSuggesting(false);
    }
  };

  // =====================================================
  // CRIAR / EDITAR
  // =====================================================

  const openCreateTask = () => {
    resetTaskForm();

    setMessage('');

    /*
      Em vez de abrir o modal,
      agora "Nova tarefa" abre a tela
      bonita de criação.
    */
    setPage('create');
  };

  const openEditTaskModal = (
    task,
  ) => {
    setTaskForm({
      titulo: task.titulo ?? '',

      descricao:
        task.descricao ?? '',

      idDesenvolvedor: String(
        task.idDesenvolvedor ?? '',
      ),

      status:
        task.status || 'pendente',
    });

    setEditingTaskId(
      task.idTarefa,
    );

    setMessage('');

    setModalVisible(true);
  };

  const closeTaskModal = () => {
    setModalVisible(false);

    resetTaskForm();
  };

  const saveTask = async () => {
    if (
      !taskForm.titulo?.trim() ||
      !taskForm.descricao?.trim() ||
      !taskForm.idDesenvolvedor
    ) {
      setMessage(
        'Preencha título, descrição e desenvolvedor.',
      );

      return;
    }

    try {
      setSaving(true);
      setMessage('');

      const payload = {
        titulo:
          taskForm.titulo.trim(),

        descricao:
          taskForm.descricao.trim(),

        idDesenvolvedor: Number(
          taskForm.idDesenvolvedor,
        ),
      };

      if (editingTaskId) {
        await axios.put(
          `${API_URL}/tasks/${editingTaskId}`,

          {
            ...payload,

            status:
              taskForm.status ||
              'pendente',
          },

          authConfig(),
        );
      } else {
        await axios.post(
          `${API_URL}/tasks`,

          payload,

          authConfig(),
        );
      }

      setMessage(
        editingTaskId
          ? 'Tarefa alterada com sucesso.'
          : 'Tarefa criada com sucesso.',
      );

      setModalVisible(false);

      resetTaskForm();

      await loadData();

      setPage('tasks');
    } catch (error) {
      console.error(
        'Erro ao salvar tarefa:',
        error,
      );

      setMessage(
        editingTaskId
          ? 'Erro ao alterar a tarefa.'
          : 'Erro ao criar a tarefa.',
      );
    } finally {
      setSaving(false);
    }
  };

  // =====================================================
  // DELETE
  // =====================================================

  const performDelete = async (
    task,
  ) => {
    try {
      setMessage('');

      await axios.delete(
        `${API_URL}/tasks/${task.idTarefa}`,
        authConfig(),
      );

      setMessage(
        'Tarefa apagada com sucesso.',
      );

      await loadData();
    } catch (error) {
      console.error(
        'Erro ao apagar tarefa:',
        error,
      );

      setMessage(
        'Erro ao apagar tarefa.',
      );
    }
  };

  const deleteTask = (
    task,
  ) => {
    /*
      WEB
    */
    if (
      Platform.OS === 'web' &&
      typeof globalThis.confirm ===
        'function'
    ) {
      const confirmed =
        globalThis.confirm(
          `Apagar a tarefa "${task.titulo}"?`,
        );

      if (!confirmed) {
        return;
      }

      performDelete(task);

      return;
    }

    /*
      ANDROID / IOS
    */
    Alert.alert(
      'Apagar tarefa',
      `Deseja realmente apagar "${task.titulo}"?`,

      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },

        {
          text: 'Apagar',
          style: 'destructive',

          onPress: () =>
            performDelete(task),
        },
      ],
    );
  };

  // =====================================================
  // NAVEGAÇÃO
  // =====================================================

  const changePage = (
    newPage,
  ) => {
    if (newPage === 'logout') {
      logout();

      return;
    }

    if (newPage === 'create') {
      resetTaskForm();

      setMessage('');
    }

    setPage(newPage);
  };

  // =====================================================
  // LOGIN
  // =====================================================

  if (!user) {
    return (
      <LoginScreen
        error={loginError}
        loading={loginLoading}
        onLogin={login}
      />
    );
  }

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <SafeAreaView
        style={styles.loadingScreen}
      >
        <View style={styles.loadingContent}>
          <ActivityIndicator
            size="large"
            color="#F36A4A"
          />

          <Text style={styles.loadingText}>
            Carregando...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  // =====================================================
  // PÁGINAS
  // =====================================================

  const renderPage = () => {
    if (page === 'create') {
      return (
        <CreateTaskScreen
          developers={developers}
          editingTaskId={
            editingTaskId
          }
          onSave={saveTask}
          onSuggestDescription={
            suggestDescription
          }
          onUpdate={
            updateTaskForm
          }
          saving={saving}
          suggesting={suggesting}
          taskForm={taskForm}
        />
      );
    }

    if (
      page === 'developers'
    ) {
      return (
        <DevelopersScreen
          developers={developers}
        />
      );
    }

    return (
      <TasksScreen
        tasks={tasks}
        onCreate={openCreateTask}
        onDelete={deleteTask}
        onEdit={openEditTaskModal}
      />
    );
  };

  // =====================================================
  // APP
  // =====================================================

  return (
    <SafeAreaView
      style={styles.app}
    >
      <View
        style={
          styles.screenContainer
        }
      >
        {renderPage()}
      </View>

      {message ? (
        <View
          pointerEvents="box-none"
          style={styles.messageWrapper}
        >
          <View
            style={
              styles.messageBox
            }
          >
            <MaterialCommunityIcons
              name="information-outline"
              size={16}
              color="#FFFFFF"
            />

            <Text
              style={
                styles.messageText
              }
              numberOfLines={2}
            >
              {message}
            </Text>

            <Pressable
              style={
                styles.messageClose
              }
              onPress={() =>
                setMessage('')
              }
            >
              <MaterialCommunityIcons
                name="close"
                size={16}
                color="#FFFFFF"
              />
            </Pressable>
          </View>
        </View>
      ) : null}

      <BottomNavigation
        active={page}
        onChange={changePage}
        onLogout={logout}
      />

      <TaskModal
        developers={developers}
        editingTaskId={
          editingTaskId
        }
        onClose={closeTaskModal}
        onSave={saveTask}
        onSuggestDescription={
          suggestDescription
        }
        onUpdate={updateTaskForm}
        saving={saving}
        suggesting={suggesting}
        taskForm={taskForm}
        visible={modalVisible}
      />
    </SafeAreaView>
  );
}