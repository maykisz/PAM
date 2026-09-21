import React, {
  useMemo,
  useState,
} from 'react';

import {
  ActivityIndicator,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import UserAvatar from '../components/UserAvatar';

import styles from './CreateTaskScreen.css';

type Developer = {
  idDesenvolvedor: number | string;
  nomeDesenvolvedor: string;
  cargo?: string;
  emailDesenvolvedor?: string;
};

type Props = {
  user?: any;

  developers: Developer[];

  editingTaskId?: number | string | null;

  onBack: () => void;

  onSave: () => void;

  onSuggestDescription: () => void;

  onUpdate: (
    field: string,
    value: string,
  ) => void;

  saving: boolean;

  suggesting: boolean;

  taskForm: any;
};

const STATUS = [
  {
    value: 'pendente',
    label: 'A fazer',
  },
  {
    value: 'em andamento',
    label: 'Em andamento',
  },
  {
    value: 'concluida',
    label: 'Concluída',
  },
];

function initials(name?: string) {
  if (!name) {
    return '?';
  }

  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function CreateTaskScreen({
  user,
  developers = [],
  editingTaskId,
  onBack,
  onSave,
  onSuggestDescription,
  onUpdate,
  saving,
  suggesting,
  taskForm,
}: Props) {
  const [
    developerModal,
    setDeveloperModal,
  ] = useState(false);

  const [
    statusModal,
    setStatusModal,
  ] = useState(false);

  const developer = useMemo(
    () =>
      developers.find(
        (item) =>
          String(
            item.idDesenvolvedor,
          ) ===
          String(
            taskForm.idDesenvolvedor,
          ),
      ),
    [
      developers,
      taskForm.idDesenvolvedor,
    ],
  );

  const currentStatus =
    STATUS.find(
      (item) =>
        item.value ===
        (taskForm.status ||
          'pendente'),
    ) || STATUS[0];

  const editing =
    Boolean(editingTaskId);

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={
          styles.content
        }
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.topBar}>
          <Pressable
            style={styles.back}
            onPress={onBack}
          >
            <MaterialCommunityIcons
              name="chevron-left"
              size={29}
              color="#171717"
            />
          </Pressable>

          <UserAvatar user={user} />
        </View>

        <View style={styles.heading}>
          <Text style={styles.overline}>
            Tarefas
          </Text>

          <Text style={styles.title}>
            {editing
              ? 'Editar tarefa'
              : 'Criar tarefa'}
          </Text>

          <Text style={styles.subtitle}>
            {editing
              ? 'Atualize os detalhes da tarefa.'
              : 'Adicione uma nova tarefa e mantenha sua equipe organizada.'}
          </Text>
        </View>

        <View style={styles.fieldCard}>
          <View style={styles.fieldIcon}>
            <MaterialCommunityIcons
              name="file-document-outline"
              size={22}
              color="#202020"
            />
          </View>

          <View style={styles.fieldContent}>
            <Text style={styles.label}>
              Título
            </Text>

            <View style={styles.inputBox}>
              <TextInput
                value={taskForm.titulo}
                onChangeText={(value) =>
                  onUpdate(
                    'titulo',
                    value.slice(0, 100),
                  )
                }
                placeholder="O que precisa ser feito?"
                placeholderTextColor="#8C939C"
                style={styles.input}
                maxLength={100}
              />
            </View>

            <Text style={styles.counter}>
              {taskForm.titulo?.length || 0}/100
            </Text>
          </View>
        </View>

        <View style={styles.fieldCard}>
          <View style={styles.fieldIcon}>
            <MaterialCommunityIcons
              name="format-list-bulleted"
              size={22}
              color="#202020"
            />
          </View>

          <View style={styles.fieldContent}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>
                Descrição
              </Text>

              <Pressable
                disabled={suggesting}
                style={styles.aiButton}
                onPress={
                  onSuggestDescription
                }
              >
                {suggesting ? (
                  <ActivityIndicator
                    size="small"
                    color="#DD5E45"
                  />
                ) : (
                  <>
                    <MaterialCommunityIcons
                      name="creation-outline"
                      size={14}
                      color="#DD5E45"
                    />

                    <Text style={styles.aiText}>
                      Sugerir com IA
                    </Text>
                  </>
                )}
              </Pressable>
            </View>

            <View style={styles.textAreaBox}>
              <TextInput
                value={
                  taskForm.descricao
                }
                onChangeText={(value) =>
                  onUpdate(
                    'descricao',
                    value.slice(0, 500),
                  )
                }
                placeholder="Adicione mais detalhes sobre esta tarefa..."
                placeholderTextColor="#8C939C"
                multiline
                maxLength={500}
                textAlignVertical="top"
                style={styles.textArea}
              />
            </View>

            <Text style={styles.counter}>
              {taskForm.descricao?.length || 0}/500
            </Text>
          </View>
        </View>

        <View style={styles.selectRow}>
          <Pressable
            style={styles.selectCard}
            onPress={() =>
              setDeveloperModal(true)
            }
          >
            <View style={styles.selectIcon}>
              <MaterialCommunityIcons
                name="account-outline"
                size={22}
                color="#202020"
              />
            </View>

            <View style={styles.selectContent}>
              <Text style={styles.selectLabel}>
                Responsável
              </Text>

              <View style={styles.selectBox}>
                {developer ? (
                  <>
                    <View style={styles.miniAvatar}>
                      <Text
                        style={
                          styles.miniAvatarText
                        }
                      >
                        {initials(
                          developer.nomeDesenvolvedor,
                        )}
                      </Text>
                    </View>

                    <Text
                      style={styles.selectValue}
                      numberOfLines={1}
                    >
                      {
                        developer.nomeDesenvolvedor
                      }
                    </Text>
                  </>
                ) : (
                  <Text
                    style={
                      styles.selectPlaceholder
                    }
                  >
                    Selecionar dev
                  </Text>
                )}

                <MaterialCommunityIcons
                  name="chevron-down"
                  size={19}
                  color="#727981"
                />
              </View>
            </View>
          </Pressable>

          <Pressable
            style={styles.selectCard}
            onPress={() =>
              setStatusModal(true)
            }
          >
            <View style={styles.selectIcon}>
              <MaterialCommunityIcons
                name="progress-clock"
                size={22}
                color="#202020"
              />
            </View>

            <View style={styles.selectContent}>
              <Text style={styles.selectLabel}>
                Status
              </Text>

              <View style={styles.selectBox}>
                <View style={styles.statusDot} />

                <Text
                  style={styles.selectValue}
                  numberOfLines={1}
                >
                  {currentStatus.label}
                </Text>

                <MaterialCommunityIcons
                  name="chevron-down"
                  size={19}
                  color="#727981"
                />
              </View>
            </View>
          </Pressable>
        </View>

        <Pressable
          disabled={saving}
          style={[
            styles.saveButton,
            saving &&
              styles.saveButtonDisabled,
          ]}
          onPress={onSave}
        >
          {saving ? (
            <ActivityIndicator
              color="#FFFFFF"
            />
          ) : (
            <>
              <Text style={styles.saveText}>
                {editing
                  ? 'Salvar alterações'
                  : 'Criar tarefa'}
              </Text>

              <View style={styles.saveArrow}>
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={23}
                  color="#202020"
                />
              </View>
            </>
          )}
        </Pressable>
      </ScrollView>

      <Modal
        visible={developerModal}
        transparent
        animationType="fade"
        onRequestClose={() =>
          setDeveloperModal(false)
        }
      >
        <Pressable
          style={styles.backdrop}
          onPress={() =>
            setDeveloperModal(false)
          }
        >
          <Pressable
            style={styles.modal}
            onPress={() => {}}
          >
            <View style={styles.handle} />

            <Text style={styles.modalTitle}>
              Escolha o responsável
            </Text>

            <Text style={styles.modalSubtitle}>
              Selecione um desenvolvedor da equipe.
            </Text>

            <ScrollView
              showsVerticalScrollIndicator={false}
            >
              {developers.map((item) => {
                const selected =
                  String(
                    taskForm.idDesenvolvedor,
                  ) ===
                  String(
                    item.idDesenvolvedor,
                  );

                return (
                  <Pressable
                    key={String(
                      item.idDesenvolvedor,
                    )}
                    style={[
                      styles.developerItem,
                      selected &&
                        styles.developerSelected,
                    ]}
                    onPress={() => {
                      onUpdate(
                        'idDesenvolvedor',
                        String(
                          item.idDesenvolvedor,
                        ),
                      );

                      setDeveloperModal(false);
                    }}
                  >
                    <View
                      style={
                        styles.developerAvatar
                      }
                    >
                      <Text
                        style={
                          styles.developerAvatarText
                        }
                      >
                        {initials(
                          item.nomeDesenvolvedor,
                        )}
                      </Text>
                    </View>

                    <View
                      style={
                        styles.developerInfo
                      }
                    >
                      <Text
                        style={
                          styles.developerName
                        }
                      >
                        {
                          item.nomeDesenvolvedor
                        }
                      </Text>

                      <Text
                        style={
                          styles.developerRole
                        }
                      >
                        {item.cargo ||
                          item.emailDesenvolvedor ||
                          'Desenvolvedor'}
                      </Text>
                    </View>

                    {selected ? (
                      <MaterialCommunityIcons
                        name="check-circle"
                        size={21}
                        color="#E7654A"
                      />
                    ) : null}
                  </Pressable>
                );
              })}
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>

      <Modal
        visible={statusModal}
        transparent
        animationType="fade"
        onRequestClose={() =>
          setStatusModal(false)
        }
      >
        <Pressable
          style={styles.backdrop}
          onPress={() =>
            setStatusModal(false)
          }
        >
          <Pressable
            style={styles.modalSmall}
            onPress={() => {}}
          >
            <View style={styles.handle} />

            <Text style={styles.modalTitle}>
              Status da tarefa
            </Text>

            {STATUS.map((item) => {
              const selected =
                currentStatus.value ===
                item.value;

              return (
                <Pressable
                  key={item.value}
                  style={[
                    styles.statusOption,
                    selected &&
                      styles.statusOptionSelected,
                  ]}
                  onPress={() => {
                    onUpdate(
                      'status',
                      item.value,
                    );

                    setStatusModal(false);
                  }}
                >
                  <Text
                    style={
                      styles.statusOptionText
                    }
                  >
                    {item.label}
                  </Text>

                  {selected ? (
                    <MaterialCommunityIcons
                      name="check"
                      size={20}
                      color="#E7654A"
                    />
                  ) : null}
                </Pressable>
              );
            })}
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}