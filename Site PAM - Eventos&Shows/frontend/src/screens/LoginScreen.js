import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ícones do Expo para o botão de exibir/ocultar senha
import styles from './styles/login/LoginStyles';
import { loginUser } from '../services/api';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Validação básica e chamada à API de login.
  const handleLogin = async () => {
    try {
      if (!email || !password) {
        return Alert.alert('Atenção', 'Preencha e-mail e senha.');
      }

      // Envia os dados para a API de autenticação.
      await loginUser(email, password);
      Alert.alert('Sucesso', 'Login realizado com sucesso!');

      // Se desejar, redirecione o usuário para a tela principal:
      // navigation.replace('Home');
    } catch (error) {
      const message = error?.response?.data?.message || 'Não foi possível entrar.';
      Alert.alert('Erro', message);
    }
  };

  return (
    // KeyboardAvoidingView evita que o teclado cubra os inputs
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        
        {/* Cabeçalho com Logo e Texto */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Bem-vindo de volta</Text>
          <Text style={styles.instructionText}>Entre na sua conta para continuar</Text>
        </View>

        {/* Card de Login */}
        <View style={styles.loginCard}>
          
          {/* Botão Google (Opcional, mas estava na imagem) */}
          <TouchableOpacity style={styles.googleButton}>
            <Ionicons name="logo-google" size={20} color="#FFF" />
            <Text style={styles.googleButtonText}>Entrar com Google</Text>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>ou</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Campos de Input */}
          <View style={styles.inputGroup}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.inputField}
                placeholder="seu@email.com"
                placeholderTextColor="#666"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Senha</Text>
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="••••••••"
                  placeholderTextColor="#666"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons 
                    name={showPassword ? "eye-off-outline" : "eye-outline"} 
                    size={20} 
                    color="#A1A7B3" 
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Botão de Entrar */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        {/* Rodapé */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Não tem conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterStep1')}>
            <Text style={styles.footerLink}>Cadastre-se grátis</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}