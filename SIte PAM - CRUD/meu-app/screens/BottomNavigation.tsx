import React from 'react';

import {
  Pressable,
  Text,
  View,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './BottomNavigation.css';

export default function BottomNavigation({
  active,
  onChange,
  onLogout,
}: any) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.navigation}>
        <Pressable
          style={styles.item}
          onPress={() => onChange('tasks')}
        >
          <MaterialCommunityIcons
            name={
              active === 'tasks'
                ? 'home'
                : 'home-outline'
            }
            size={20}
            color={
              active === 'tasks'
                ? '#242424'
                : '#AAAAA6'
            }
          />

          <Text
            style={[
              styles.label,
              active === 'tasks' &&
                styles.activeLabel,
            ]}
          >
            Tarefas
          </Text>
        </Pressable>

        <Pressable
          style={styles.item}
          onPress={() => onChange('create')}
        >
          <MaterialCommunityIcons
            name={
              active === 'create'
                ? 'plus-box'
                : 'plus-box-outline'
            }
            size={20}
            color={
              active === 'create'
                ? '#242424'
                : '#AAAAA6'
            }
          />

          <Text
            style={[
              styles.label,
              active === 'create' &&
                styles.activeLabel,
            ]}
          >
            Criar
          </Text>
        </Pressable>

        <Pressable
          style={styles.item}
          onPress={() =>
            onChange('developers')
          }
        >
          <MaterialCommunityIcons
            name={
              active === 'developers'
                ? 'account-group'
                : 'account-group-outline'
            }
            size={20}
            color={
              active === 'developers'
                ? '#242424'
                : '#AAAAA6'
            }
          />

          <Text
            style={[
              styles.label,
              active === 'developers' &&
                styles.activeLabel,
            ]}
          >
            Equipe
          </Text>
        </Pressable>

        <Pressable
          style={styles.item}
          onPress={onLogout}
        >
          <MaterialCommunityIcons
            name="logout"
            size={20}
            color="#AAAAA6"
          />

          <Text style={styles.label}>
            Sair
          </Text>
        </Pressable>
      </View>
    </View>
  );
}