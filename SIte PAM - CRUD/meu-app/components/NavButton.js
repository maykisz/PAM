import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from '../styles';

export default function NavButton({ label, page, targetPage, onPress }) {
  const active = page === targetPage;

  return (
    <Pressable
      style={[styles.navButton, active && styles.navButtonActive]}
      onPress={() => onPress(targetPage)}
    >
      <Text style={[styles.navButtonText, active && styles.navButtonTextActive]}>
        {label}
      </Text>
    </Pressable>
  );
}
