import React from 'react';
import { FlatList, Linking, Pressable, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../styles';

function DeveloperItem({ item }) {
  const openExternalLink = async (url) => {
    if (url) {
      await Linking.openURL(url);
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.nomeDesenvolvedor}</Text>
      <Text style={styles.cardText}>{item.cargo}</Text>
      <Text style={styles.cardMeta}>{item.emailDesenvolvedor}</Text>

      <View style={styles.socialRow}>
        <Pressable
          style={styles.socialButton}
          onPress={() => openExternalLink(item.githubUrl)}
        >
          <MaterialCommunityIcons name="github" size={20} color="#111827" />
          <Text style={styles.socialText}>GitHub</Text>
        </Pressable>

        <Pressable
          style={styles.socialButton}
          onPress={() => openExternalLink(item.instagramUrl)}
        >
          <MaterialCommunityIcons name="instagram" size={20} color="#be185d" />
          <Text style={styles.socialText}>Instagram</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function DevelopersScreen({ developers }) {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Desenvolvedores</Text>
      <Text style={styles.subtitle}>Equipe cadastrada no banco de dados.</Text>

      <FlatList
        data={developers}
        keyExtractor={(item) => String(item.idDesenvolvedor)}
        renderItem={({ item }) => <DeveloperItem item={item} />}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum desenvolvedor cadastrado.</Text>}
      />
    </View>
  );
}
