import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  ActivityIndicator,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

import axios from 'axios';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import UserAvatar from '../components/UserAvatar';

import { API_URL } from '../constants';

import styles from './TasksScreen.css';

type Task = {
  idTarefa: number | string;

  titulo: string;

  descricao?: string;

  status?: string;

  idDesenvolvedor?: number | string;

  nomeDesenvolvedor?: string;
};

type Props = {
  user?: any;

  tasks: Task[];

  onCreate: () => void;

  onDelete: (task: Task) => void;

  onEdit: (task: Task) => void;
};

type Filter =
  | 'all'
  | 'progress'
  | 'pending'
  | 'done';

type ImageMap = {
  [key: string]: string;
};

// cache durante a sessão do app
const taskImageCache = new Map<
  string,
  string
>();

function normalize(value?: string) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function getFirstName(user: any) {
  const name =
    user?.nome ||
    user?.nomeUsuario ||
    user?.nomeLogin ||
    user?.name ||
    user?.nomeDesenvolvedor;

  if (name) {
    return String(name)
      .trim()
      .split(/\s+/)[0];
  }

  if (user?.email) {
    const emailName = String(user.email)
      .split('@')[0]
      .split('.')[0];

    return (
      emailName.charAt(0).toUpperCase() +
      emailName.slice(1)
    );
  }

  return 'Usuário';
}

function getTaskStatus(task: Task) {
  const value =
    normalize(task.status);

  if (
    value.includes('conclu') ||
    value.includes('final')
  ) {
    return 'done';
  }

  if (
    value.includes('andamento') ||
    value.includes('progresso')
  ) {
    return 'progress';
  }

  return 'pending';
}

function getStatusLabel(task: Task) {
  const status =
    getTaskStatus(task);

  if (status === 'done') {
    return 'Concluída';
  }

  if (status === 'progress') {
    return 'Em andamento';
  }

  return 'A fazer';
}

function getInitials(name?: string) {
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

function getImageKey(task: Task) {
  return [
    task.idTarefa,
    task.titulo,
    task.descricao,
  ].join('::');
}

// =====================================================
// CARD COM IMAGEM IA
// =====================================================

function FeaturedTaskCard({
  task,
  image,
  loading,
  onPress,
}: {
  task: Task;

  image?: string;

  loading: boolean;

  onPress: () => void;
}) {
  const status =
    getTaskStatus(task);

  const content = (
    <>
      {/* escurecimento para o texto ficar legível */}

      <LinearGradient
        colors={[
          'rgba(0,0,0,0.02)',
          'rgba(0,0,0,0.10)',
          'rgba(10,10,10,0.92)',
        ]}
        locations={[0, 0.45, 1]}
        style={styles.cardOverlay}
      />

      <View style={styles.cardTop}>
        <View style={styles.cardStatus}>
          <View
            style={[
              styles.cardStatusDot,

              status === 'done'
                ? styles.dotDone
                : styles.dotActive,
            ]}
          />

          <Text
            style={
              styles.cardStatusText
            }
          >
            {getStatusLabel(task)}
          </Text>
        </View>

        <View style={styles.cardHeart}>
          <MaterialCommunityIcons
            name="heart-outline"
            size={21}
            color="#FFFFFF"
          />
        </View>
      </View>

      <View style={styles.cardBottom}>
        <Text
          style={styles.cardEyebrow}
          numberOfLines={1}
        >
          {task.nomeDesenvolvedor
            ? `RESPONSÁVEL • ${task.nomeDesenvolvedor}`
            : 'TAREFA EM DESTAQUE'}
        </Text>

        <Text
          style={styles.cardTitle}
          numberOfLines={2}
        >
          {task.titulo}
        </Text>

        <Text
          style={styles.cardDescription}
          numberOfLines={2}
        >
          {task.descricao ||
            'Continue trabalhando nesta tarefa.'}
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.continueButton,

            pressed &&
              styles.buttonPressed,
          ]}
          onPress={onPress}
        >
          <Text
            style={
              styles.continueButtonText
            }
          >
            Abrir tarefa
          </Text>

          <View
            style={
              styles.continueArrow
            }
          >
            <MaterialCommunityIcons
              name="arrow-right"
              size={21}
              color="#222222"
            />
          </View>
        </Pressable>
      </View>
    </>
  );

  if (image) {
    return (
      <ImageBackground
        source={{
          uri: image,
        }}
        resizeMode="cover"
        style={styles.featuredCard}
        imageStyle={
          styles.featuredImage
        }
      >
        {content}
      </ImageBackground>
    );
  }

  return (
    <LinearGradient
      colors={[
        '#FF684C',
        '#F47A5F',
        '#242728',
      ]}
      start={{
        x: 0,
        y: 0,
      }}
      end={{
        x: 1,
        y: 1,
      }}
      style={styles.featuredCard}
    >
      <View
        style={
          styles.placeholderCircleOne
        }
      />

      <View
        style={
          styles.placeholderCircleTwo
        }
      />

      {loading ? (
        <View
          style={
            styles.imageLoading
          }
        >
          <ActivityIndicator
            size="large"
            color="#FFFFFF"
          />

          <Text
            style={
              styles.imageLoadingText
            }
          >
            Criando imagem com IA...
          </Text>
        </View>
      ) : null}

      {content}
    </LinearGradient>
  );
}

// =====================================================
// LINHA NORMAL DA TAREFA
// =====================================================

function TaskRow({
  task,
  onEdit,
  onDelete,
  last,
}: {
  task: Task;

  onEdit: (task: Task) => void;

  onDelete: (task: Task) => void;

  last: boolean;
}) {
  const [actionsOpen, setActionsOpen] =
    useState(false);

  const status =
    getTaskStatus(task);

  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          styles.taskRow,

          pressed &&
            styles.taskRowPressed,
        ]}
        onPress={() =>
          onEdit(task)
        }
      >
        <View
          style={[
            styles.taskIcon,

            status === 'done' &&
              styles.taskIconDone,
          ]}
        >
          <MaterialCommunityIcons
            name={
              status === 'done'
                ? 'check'
                : status === 'progress'
                  ? 'progress-clock'
                  : 'clipboard-text-outline'
            }
            size={19}
            color={
              status === 'done'
                ? '#63747B'
                : '#E65E44'
            }
          />
        </View>

        <View
          style={
            styles.taskContent
          }
        >
          <View
            style={
              styles.taskTitleRow
            }
          >
            <Text
              style={
                styles.taskTitle
              }
              numberOfLines={1}
            >
              {task.titulo}
            </Text>

            <View
              style={[
                styles.statusBadge,

                status === 'done'
                  ? styles.statusDone
                  : status ===
                      'progress'
                    ? styles.statusProgress
                    : styles.statusPending,
              ]}
            >
              <Text
                style={[
                  styles.statusText,

                  status ===
                    'done' &&
                    styles.statusTextDone,
                ]}
              >
                {getStatusLabel(
                  task,
                )}
              </Text>
            </View>
          </View>

          <Text
            style={
              styles.taskDescription
            }
            numberOfLines={1}
          >
            {task.descricao ||
              'Sem descrição'}
          </Text>

          <View
            style={
              styles.taskMeta
            }
          >
            <View
              style={
                styles.avatarMini
              }
            >
              <Text
                style={
                  styles.avatarMiniText
                }
              >
                {getInitials(
                  task.nomeDesenvolvedor,
                )}
              </Text>
            </View>

            <Text
              style={
                styles.developerName
              }
              numberOfLines={1}
            >
              {task.nomeDesenvolvedor ||
                'Sem responsável'}
            </Text>
          </View>
        </View>

        <Pressable
          hitSlop={10}
          style={styles.moreButton}
          onPress={(event) => {
            event.stopPropagation();

            setActionsOpen(
              (current) =>
                !current,
            );
          }}
        >
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={21}
            color="#262626"
          />
        </Pressable>
      </Pressable>

      {actionsOpen ? (
        <View
          style={
            styles.rowActions
          }
        >
          <Pressable
            style={
              styles.editAction
            }
            onPress={() => {
              setActionsOpen(false);

              onEdit(task);
            }}
          >
            <MaterialCommunityIcons
              name="pencil-outline"
              size={15}
              color="#303030"
            />

            <Text
              style={
                styles.editActionText
              }
            >
              Editar
            </Text>
          </Pressable>

          <Pressable
            style={
              styles.deleteAction
            }
            onPress={() => {
              setActionsOpen(false);

              onDelete(task);
            }}
          >
            <MaterialCommunityIcons
              name="trash-can-outline"
              size={15}
              color="#D95642"
            />

            <Text
              style={
                styles.deleteActionText
              }
            >
              Excluir
            </Text>
          </Pressable>
        </View>
      ) : null}

      {!last ? (
        <View
          style={styles.rowDivider}
        />
      ) : null}
    </View>
  );
}

// =====================================================
// SCREEN
// =====================================================

export default function TasksScreen({
  user,
  tasks = [],
  onCreate,
  onDelete,
  onEdit,
}: Props) {
  const [search, setSearch] =
    useState('');

  const [filter, setFilter] =
    useState<Filter>('all');

  const [images, setImages] =
    useState<ImageMap>({});

  const [loadingImages, setLoadingImages] =
    useState<Record<string, boolean>>(
      {},
    );

  const requestedImages =
    useRef<Set<string>>(
      new Set(),
    );

  const filteredTasks =
    useMemo(() => {
      const query =
        normalize(search);

      return tasks.filter(
        (task) => {
          const searchable =
            normalize(
              [
                task.titulo,
                task.descricao,
                task.nomeDesenvolvedor,
              ].join(' '),
            );

          if (
            query &&
            !searchable.includes(
              query,
            )
          ) {
            return false;
          }

          if (filter === 'all') {
            return true;
          }

          return (
            getTaskStatus(
              task,
            ) === filter
          );
        },
      );
    }, [
      tasks,
      search,
      filter,
    ]);

  /*
    Apenas três tarefas recebem imagens.
    Primeiro as em andamento, depois
    pendentes e por último concluídas.
  */

  const featuredTasks =
    useMemo(() => {
      return [
        ...filteredTasks,
      ]
        .sort((a, b) => {
          const score = (
            task: Task,
          ) => {
            const status =
              getTaskStatus(task);

            if (
              status ===
              'progress'
            ) {
              return 0;
            }

            if (
              status ===
              'pending'
            ) {
              return 1;
            }

            return 2;
          };

          return (
            score(a) - score(b)
          );
        })
        .slice(0, 3);
    }, [filteredTasks]);

  // ===================================================
  // OPENAI IMAGES
  // ===================================================

  useEffect(() => {
    const loadImages =
      async () => {
        for (
          const task of
          featuredTasks
        ) {
          const key =
            getImageKey(task);

          const cached =
            taskImageCache.get(
              key,
            );

          if (cached) {
            setImages(
              (current) => ({
                ...current,

                [String(
                  task.idTarefa,
                )]: cached,
              }),
            );

            continue;
          }

          if (
            requestedImages.current.has(
              key,
            )
          ) {
            continue;
          }

          requestedImages.current.add(
            key,
          );

          setLoadingImages(
            (current) => ({
              ...current,

              [String(
                task.idTarefa,
              )]: true,
            }),
          );

          try {
            const response =
              await axios.post(
                `${API_URL}/ai/task-image`,

                {
                  idTarefa:
                    task.idTarefa,

                  titulo:
                    task.titulo,

                  descricao:
                    task.descricao ||
                    '',
                },

                {
                  headers: {
                    'x-user-id':
                      String(
                        user?.idLogin ||
                          '',
                      ),
                  },
                },
              );

            const image =
              response.data?.image;

            if (image) {
              taskImageCache.set(
                key,
                image,
              );

              setImages(
                (current) => ({
                  ...current,

                  [String(
                    task.idTarefa,
                  )]: image,
                }),
              );
            }
          } catch (error) {
            console.error(
              'Erro ao gerar imagem da tarefa:',
              error,
            );
          } finally {
            setLoadingImages(
              (current) => ({
                ...current,

                [String(
                  task.idTarefa,
                )]: false,
              }),
            );
          }
        }
      };

    loadImages();
  }, [
    featuredTasks,
    user?.idLogin,
  ]);

  const filters = [
    {
      key: 'all',
      label: 'Todas',
    },

    {
      key: 'progress',
      label: 'Em andamento',
    },

    {
      key: 'pending',
      label: 'A fazer',
    },

    {
      key: 'done',
      label: 'Concluídas',
    },
  ] as const;

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={
          styles.content
        }
        showsVerticalScrollIndicator={
          false
        }
        keyboardShouldPersistTaps="handled"
      >
        {/* CONTA */}

        <View style={styles.header}>
          <View>
            <Text style={styles.hello}>
              Olá,{' '}
              {getFirstName(user)}
            </Text>

            <Text
              style={
                styles.welcome
              }
            >
              Bem-vindo ao seu workspace
            </Text>
          </View>

          <UserAvatar user={user} />
        </View>

        {/* BUSCA */}

        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <MaterialCommunityIcons
              name="magnify"
              size={25}
              color="#181818"
            />

            <TextInput
              value={search}
              onChangeText={
                setSearch
              }
              style={
                styles.searchInput
              }
              placeholder="Buscar tarefas"
              placeholderTextColor="#858B92"
            />

            {search ? (
              <Pressable
                hitSlop={8}
                onPress={() =>
                  setSearch('')
                }
              >
                <MaterialCommunityIcons
                  name="close-circle"
                  size={18}
                  color="#A8ABA9"
                />
              </Pressable>
            ) : null}
          </View>

          <Pressable
            style={
              styles.searchFilter
            }
          >
            <MaterialCommunityIcons
              name="tune-variant"
              size={23}
              color="#FFFFFF"
            />
          </Pressable>
        </View>

        {/* FILTROS */}

        <Text
          style={
            styles.sectionHeadline
          }
        >
          Destaques para você
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={
            false
          }
          contentContainerStyle={
            styles.filters
          }
        >
          {filters.map((item) => {
            const active =
              filter === item.key;

            return (
              <Pressable
                key={item.key}
                onPress={() =>
                  setFilter(
                    item.key,
                  )
                }
                style={[
                  styles.filterChip,

                  active &&
                    styles.filterChipActive,
                ]}
              >
                <Text
                  style={[
                    styles.filterText,

                    active &&
                      styles.filterTextActive,
                  ]}
                >
                  {item.label}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* CARDS COM IMAGENS IA */}

        {featuredTasks.length ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={
              false
            }
            contentContainerStyle={
              styles.featuredList
            }
            snapToInterval={326}
            decelerationRate="fast"
          >
            {featuredTasks.map(
              (task) => (
                <FeaturedTaskCard
                  key={String(
                    task.idTarefa,
                  )}
                  task={task}
                  image={
                    images[
                      String(
                        task.idTarefa,
                      )
                    ]
                  }
                  loading={
                    !!loadingImages[
                      String(
                        task.idTarefa,
                      )
                    ]
                  }
                  onPress={() =>
                    onEdit(task)
                  }
                />
              ),
            )}
          </ScrollView>
        ) : (
          <View
            style={
              styles.emptyFeatured
            }
          >
            <MaterialCommunityIcons
              name="image-plus-outline"
              size={30}
              color="#292929"
            />

            <Text
              style={
                styles.emptyFeaturedTitle
              }
            >
              Nenhuma tarefa em destaque
            </Text>

            <Text
              style={
                styles.emptyFeaturedText
              }
            >
              Crie uma tarefa para começar.
            </Text>

            <Pressable
              style={
                styles.emptyFeaturedButton
              }
              onPress={onCreate}
            >
              <Text
                style={
                  styles.emptyFeaturedButtonText
                }
              >
                Nova tarefa
              </Text>
            </Pressable>
          </View>
        )}

        {/* LISTA NORMAL */}

        <View
          style={
            styles.tasksHeader
          }
        >
          <View>
            <Text
              style={
                styles.tasksTitle
              }
            >
              Tarefas recentes
            </Text>

            <Text
              style={
                styles.tasksSubtitle
              }
            >
              {filteredTasks.length}{' '}
              {filteredTasks.length ===
              1
                ? 'atividade'
                : 'atividades'}
            </Text>
          </View>

          <Pressable
            style={
              styles.addTaskButton
            }
            onPress={onCreate}
          >
            <MaterialCommunityIcons
              name="plus"
              size={18}
              color="#FFFFFF"
            />

            <Text
              style={
                styles.addTaskText
              }
            >
              Nova
            </Text>
          </Pressable>
        </View>

        {filteredTasks.length ? (
          <View
            style={
              styles.tasksPanel
            }
          >
            {filteredTasks.map(
              (task, index) => (
                <TaskRow
                  key={String(
                    task.idTarefa,
                  )}
                  task={task}
                  onEdit={onEdit}
                  onDelete={
                    onDelete
                  }
                  last={
                    index ===
                    filteredTasks.length -
                      1
                  }
                />
              ),
            )}
          </View>
        ) : (
          <View
            style={
              styles.emptyTasks
            }
          >
            <MaterialCommunityIcons
              name="clipboard-search-outline"
              size={28}
              color="#333333"
            />

            <Text
              style={
                styles.emptyTasksTitle
              }
            >
              Nenhuma tarefa encontrada
            </Text>

            <Text
              style={
                styles.emptyTasksText
              }
            >
              Tente alterar a busca ou o filtro.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}