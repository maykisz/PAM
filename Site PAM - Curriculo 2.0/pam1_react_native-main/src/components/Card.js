import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from './styles/theme';

export default function Card({ title, icon, children }) {
  return (
    <View style={styles.card}>
      <View style={styles.titleContainer}>
        <Ionicons name={icon} size={22} color={theme.colors.primary} />
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.lightTransparent,
    borderRadius: 16,
    padding: 20,
    marginBottom: 25,
    width: '100%',
    shadowColor: theme.colors.dark,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: theme.colors.textDark,
  },
  contentContainer: {
    marginTop: 5,
  },
}); 