import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView, 
  ActivityIndicator 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/login/LoginStyles';
import { loginUser } from '../services/api';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // 1. Lógica para o botão de Login Tradicional (E-mail/Senha)
  const handleLogin = async () => {
    if (!email || !password) {
      return Alert.alert('Atenção', 'Preencha e-mail e senha.');
    }

    setLoading(true);
    try {
      // Chama sua API de autenticação
      const response = await loginUser(email, password);
      
      const profileComplete = response.data.isProfileComplete ?? true;
      if (response.data?.token && profileComplete) {
        Alert.alert('Sucesso', 'Bem-vindo ao Vortez.ai!');
        navigation.replace('HomeScreen');
      } else if (response.data?.token) {
        navigation.navigate('OnboardingWizard');
      } else {
        throw new Error('Resposta inválida do servidor.');
      }
    } catch (error) {
      const message = error?.response?.data?.message || 'Não foi possível entrar.';
      Alert.alert('Erro', message);
    } finally {
      setLoading(false);
    }
  };

  // 2. Lógica Robusta para o Botão Google
  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      // Simulação da chamada ao seu serviço de Google Auth
      // const googleResponse = await googleAuthService.signIn(); 
      
      // Simulação de verificação no seu banco de dados
      // Aqui você enviaria o token do Google para o seu backend verificar
      const mockApiCheck = {
        existsInDb: true,
        fieldsFilled: true, // Se false, redirecionaria para completar perfil
      };

      if (mockApiCheck.existsInDb) {
        if (mockApiCheck.fieldsFilled) {
          navigation.replace('HomeScreen');
        } else {
          navigation.navigate('OnboardingWizard');
        }
      } else {
        Alert.alert("Conta não encontrada", "Deseja se cadastrar com este Google ID?");
        navigation.navigate('RegisterStep1');
      }
    } catch (error) {
      Alert.alert("Erro", "Falha na autenticação com o Google.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Bem-vindo de volta</Text>
          <Text style={styles.instructionText}>Entre na sua conta para continuar</Text>
        </View>

        {/* Card de Login */}
        <View style={styles.loginCard}>
          
          {/* Botão Google Refatorado */}
          <TouchableOpacity 
            style={[styles.googleButton, loading && { opacity: 0.7 }]} 
            onPress={handleGoogleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <>
                <Ionicons name="logo-google" size={20} color="#FFF" style={{ marginRight: 10 }} />
                <Text style={styles.googleButtonText}>Entrar com Google</Text>
              </>
            )}
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

          {/* Botão de Entrar Principal */}
          <TouchableOpacity 
            style={[styles.loginButton, loading && { backgroundColor: '#ccc' }]} 
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text style={styles.loginButtonText}>Entrar</Text>
            )}
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