import React from 'react';

import {
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './UserAvatar.css';

type Props = {
  user?: any;

  size?: 'small' | 'normal';

  onPress?: () => void;
};

function getUserName(user: any) {
  return (
    user?.nome ||
    user?.nomeUsuario ||
    user?.nomeDesenvolvedor ||
    user?.name ||
    user?.email ||
    'Usuário'
  );
}

function getInitials(user: any) {
  const name = String(
    getUserName(user),
  ).trim();

  if (!name) {
    return 'U';
  }

  if (name.includes('@')) {
    return name[0].toUpperCase();
  }

  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function UserAvatar({
  user,
  size = 'normal',
  onPress,
}: Props) {
  const image =
    user?.avatarUrl ||
    user?.fotoUrl ||
    user?.foto ||
    user?.imagem;

  const isSmall =
    size === 'small';

  const content = (
    <View
      style={[
        styles.avatar,
        isSmall
          ? styles.avatarSmall
          : styles.avatarNormal,
      ]}
    >
      {image ? (
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.fallback}>
          {user ? (
            <Text
              style={[
                styles.initials,

                isSmall &&
                  styles.initialsSmall,
              ]}
            >
              {getInitials(user)}
            </Text>
          ) : (
            <MaterialCommunityIcons
              name="account-outline"
              size={
                isSmall
                  ? 17
                  : 21
              }
              color="#242424"
            />
          )}
        </View>
      )}
    </View>
  );

  if (!onPress) {
    return content;
  }

  return (
    <Pressable
      onPress={onPress}
      hitSlop={8}
      style={({ pressed }) => [
        styles.pressable,

        pressed &&
          styles.pressed,
      ]}
    >
      {content}
    </Pressable>
  );
}