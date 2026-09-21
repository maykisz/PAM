import React from 'react';

import {
  Pressable,
  Text,
  View,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './BottomNavigation.css';

type Props = {
  active:
    | 'tasks'
    | 'create'
    | 'developers';

  onChange: (
    page:
      | 'tasks'
      | 'create'
      | 'developers',
  ) => void;

  onLogout: () => void;
};

const ITEMS = [
  {
    key: 'tasks',
    label: 'Tarefas',
    icon: 'home-outline',
    activeIcon: 'home',
  },

  {
    key: 'create',
    label: 'Criar',
    icon: 'plus',
    activeIcon: 'plus',
  },

  {
    key: 'developers',
    label: 'Equipe',
    icon:
      'account-group-outline',
    activeIcon:
      'account-group',
  },
] as const;

export default function BottomNavigation({
  active,
  onChange,
  onLogout,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        {ITEMS.map((item) => {
          const selected =
            active === item.key;

          return (
            <Pressable
              key={item.key}
              onPress={() =>
                onChange(item.key)
              }
              style={({ pressed }) => [
                styles.item,

                pressed &&
                  styles.itemPressed,
              ]}
            >
              <View
                style={[
                  styles.iconContainer,

                  selected &&
                    styles.iconContainerActive,
                ]}
              >
                <MaterialCommunityIcons
                  name={
                    selected
                      ? item.activeIcon
                      : item.icon
                  }
                  size={22}
                  color={
                    selected
                      ? '#242424'
                      : '#FFFFFF'
                  }
                />
              </View>

              <Text
                style={[
                  styles.label,

                  selected &&
                    styles.labelActive,
                ]}
              >
                {item.label}
              </Text>
            </Pressable>
          );
        })}

        <Pressable
          onPress={onLogout}
          style={({ pressed }) => [
            styles.item,

            pressed &&
              styles.itemPressed,
          ]}
        >
          <View
            style={
              styles.iconContainer
            }
          >
            <MaterialCommunityIcons
              name="logout"
              size={22}
              color="#FFFFFF"
            />
          </View>

          <Text style={styles.label}>
            Sair
          </Text>
        </Pressable>
      </View>
    </View>
  );
}