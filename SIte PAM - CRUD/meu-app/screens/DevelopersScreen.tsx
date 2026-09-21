import React from 'react';

import {
  FlatList,
  Linking,
  Pressable,
  Text,
  View,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './DevelopersScreen.css';

function DeveloperItem({ item }: any) {
  const openExternalLink = async (
    url?: string,
  ) => {
    if (!url) return;

    const supported =
      await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    }
  };

  const initials =
    item.nomeDesenvolvedor
      ?.split(' ')
      .slice(0, 2)
      .map((name: string) => name[0])
      .join('')
      .toUpperCase() || 'DEV';

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {initials}
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>
            {item.nomeDesenvolvedor}
          </Text>

          <Text style={styles.role}>
            {item.cargo}
          </Text>

          <Text style={styles.email}>
            {item.emailDesenvolvedor}
          </Text>
        </View>
      </View>

      <View style={styles.socials}>
        <Pressable
          style={styles.socialButton}
          onPress={() =>
            openExternalLink(item.githubUrl)
          }
        >
          <MaterialCommunityIcons
            name="github"
            size={18}
            color="#292929"
          />

          <Text style={styles.socialText}>
            GitHub
          </Text>
        </Pressable>

        <Pressable
          style={styles.socialButton}
          onPress={() =>
            openExternalLink(
              item.instagramUrl,
            )
          }
        >
          <MaterialCommunityIcons
            name="instagram"
            size={18}
            color="#292929"
          />

          <Text style={styles.socialText}>
            Instagram
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function DevelopersScreen({
  developers,
}: any) {
  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.list}
        data={developers}
        keyExtractor={(item) =>
          String(item.idDesenvolvedor)
        }
        contentContainerStyle={
          styles.content
        }
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.pageHeader}>
            <Text style={styles.label}>
              EQUIPE
            </Text>

            <Text style={styles.title}>
              Desenvolvedores
            </Text>

            <Text style={styles.subtitle}>
              Pessoas cadastradas no projeto.
            </Text>

            <View style={styles.summary}>
              <View>
                <Text
                  style={styles.summaryLabel}
                >
                  MEMBROS
                </Text>

                <Text
                  style={styles.summaryValue}
                >
                  {developers.length}
                </Text>
              </View>

              <MaterialCommunityIcons
                name="account-group-outline"
                size={27}
                color="#343434"
              />
            </View>

            <Text style={styles.listTitle}>
              Todos os membros
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <DeveloperItem item={item} />
        )}
      />
    </View>
  );
}