import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function OnboardingWizard({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Onboarding</Text>
      <Text style={styles.description}>
        Você está quase lá! Complete seu perfil para acessar todos os recursos.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('HomeScreen')}
      >
        <Text style={styles.buttonText}>Ir para a tela inicial</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 28,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#2B59FF',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
