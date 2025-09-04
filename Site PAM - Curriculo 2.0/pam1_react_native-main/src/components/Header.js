import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { userData } from './data/data';
import theme from './styles/theme';

export default function Header() {
  const { name, title, profilePic } = userData;
  return (
    <View style={styles.header}>
      <Image source={profilePic} style={styles.profilePic} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 30,
    padding: 20,
    borderRadius: 20,
    backgroundColor: theme.colors.darkTransparent,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: theme.colors.primary,
    marginBottom: 15,
  },
  textContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: theme.colors.light,
    textShadowColor: theme.colors.dark,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  title: {
    fontSize: 16,
    color: theme.colors.secondary,
    marginTop: 4,
    fontStyle: 'italic',
  },
});