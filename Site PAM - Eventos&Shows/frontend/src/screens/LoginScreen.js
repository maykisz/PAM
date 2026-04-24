import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView,
  Platform, ScrollView, ActivityIndicator, Alert
} from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';
import Animated, { 
  useSharedValue, useAnimatedStyle, withSequence, withTiming, withRepeat 
} from 'react-native-reanimated';

// Imports de arquivos internos
import styles from './styles/login/LoginStyles';
import { loginUser } from '../services/api';

export default function LoginScreen({ navigation }) {
  // --- ESTADOS (STATES) ---
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Alterna o olhinho da senha
  const [loading, setLoading] = useState(false); // Estado de carregamento do botão
  const [rememberMe, setRememberMe] = useState(false); // Checkbox de lembrar usuário

  // --- ANIMAÇÃO DE SHAKE (TREMOR) ---
  const shakeOffset = useSharedValue(0); // Valor inicial da posição X (0 = centro)

  // Define como o estilo animado se comporta baseado no shakeOffset
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shakeOffset.value }],
  }));

  // Função que faz o formulário tremer em caso de erro
  const triggerErrorAnimation = () => {
    shakeOffset.value = withSequence(
      withTiming(-10, { duration: 50 }), // Vai 10px pra esquerda
      withRepeat(withTiming(10, { duration: 50 }), 5, true), // Vai e volta 5 vezes
      withTiming(0, { duration: 50 }) // Volta pro centro
    );
  };

  // --- LÓGICA DE LOGIN ---
  const handleLogin = async () => {
    // Validação básica: campos vazios
    if (!email || !password) {
      triggerErrorAnimation(); // Faz tremer
      Alert.alert("Atenção", "Preencha todos os campos para entrar.");
      return;
    }

    setLoading(true); // Ativa o círculo de carregamento no botão
    try {
      const response = await loginUser(email, password);

      if (response.status === 200) {
        // Se "lembrar-me" estiver ativo, você salvaria os dados aqui (ex: AsyncStorage)
        if (rememberMe) {
          console.log("Usuário optou por salvar login");
        }
        
        console.log('Login OK!');
        navigation.replace('Home'); // Vai para a Home e apaga o login do histórico
      }
    } catch (error) {
      triggerErrorAnimation();
      const msg = error.response?.data?.message || "Servidor fora do ar ou credenciais incorretas.";
      Alert.alert("Falha no Login", msg);
    } finally {
      setLoading(false); // Desativa o carregamento independente de erro ou sucesso
    }
  };

  // --- LÓGICA REDES SOCIAIS ---
  const handleSocialLogin = (provider) => {
    Alert.alert("Login Social", `A integração com o ${provider} será feita via Firebase ou Expo Auth.`);
  };

  return (
    <View style={styles.mainWrapper}>
      {/* KeyboardAvoidingView: impede o teclado de cobrir os inputs no iOS/Android */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          {/* SEÇÃO DA LOGO */}
          <View style={styles.logoWrap}>
            <View style={styles.logoIcon}>
              <Ionicons name="checkmark-sharp" size={38} color="#fff" />
            </View>
            <Text style={styles.logoText}>Task<Text style={styles.logoHighlight}>Flow</Text></Text>
            <Text style={styles.tagline}>Organize seu tempo. Alcance mais.</Text>
          </View>

          {/* FORMULÁRIO COM ANIMAÇÃO SHAKE */}
          <Animated.View style={[styles.formContainer, animatedStyle]}>
            
            {/* Input de E-mail */}
            <View style={styles.inputGroup}>
              <Ionicons name="mail-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
              <TextInput 
                style={styles.input} 
                placeholder="Seu e-mail" 
                value={email} 
                onChangeText={setEmail} 
                autoCapitalize="none" 
                keyboardType="email-address"
              />
            </View>

            {/* Input de Senha */}
            <View style={styles.inputGroup}>
              <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
              <TextInput 
                style={styles.input} 
                placeholder="Sua senha" 
                secureTextEntry={!showPassword} // Esconde a senha se false
                value={password} 
                onChangeText={setPassword} 
              />
              {/* Botão do Olhinho */}
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons 
                  name={showPassword ? "eye-off-outline" : "eye-outline"} 
                  size={20} 
                  color="#9CA3AF" 
                />
              </TouchableOpacity>
            </View>

            {/* LINHA DE OPÇÕES (LEMBRAR-ME E ESQUECEU SENHA) */}
            <View style={styles.optionsRow}>
              {/* Checkbox Funcional */}
              <TouchableOpacity 
                style={styles.rememberBtn} 
                onPress={() => setRememberMe(!rememberMe)}
                activeOpacity={0.8}
              >
                <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                  {rememberMe && <Ionicons name="checkmark" size={12} color="#fff" />}
                </View>
                <Text style={styles.rememberText}>Lembrar-me</Text>
              </TouchableOpacity>

              {/* Link Esqueci a Senha - Conectado ao Navigation */}
              <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.forgotText}>Esqueceu a senha?</Text>
              </TouchableOpacity>
            </View>

            {/* BOTÃO DE LOGIN */}
            <TouchableOpacity 
              style={[styles.loginBtn, loading && styles.loginBtnDisabled]} 
              onPress={handleLogin} 
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.loginBtnText}>Entrar na conta</Text>
              )}
            </TouchableOpacity>

            {/* DIVISOR */}
            <View style={styles.dividerRow}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>ou entre com</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* BOTÕES DE REDES SOCIAIS (GOOGLE E APPLE) */}
            <View style={styles.socialRow}>
              <TouchableOpacity style={styles.socialBtn} onPress={() => handleSocialLogin('Google')}>
                <AntDesign name="google" size={18} color="#EA4335" />
                <Text style={styles.socialBtnText}>Google</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialBtn} onPress={() => handleSocialLogin('Apple')}>
                <Ionicons name="logo-apple" size={20} color="#000" />
                <Text style={styles.socialBtnText}>Apple</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>

          {/* RODAPÉ: LINK PARA CADASTRO */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Ainda não tem conta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterStep1')}>
              <Text style={styles.footerLink}>Crie uma agora</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* ONDAS DE FUNDO (DESIGN) */}
      <View style={styles.waveContainer} pointerEvents="none">
        <Svg style={styles.waveBack} viewBox="0 0 1440 320">
          <Path fill="#a2d8ff77" d="M0,32L48,42.7C96,53,192,75,288,117.3C384,160,480,224,576,256C672,288,768,288,864,245.3C960,203,1056,117,1152,101.3C1248,85,1344,139,1392,165.3L1440,192L1440,320L0,320Z" />
        </Svg>
        <Svg style={styles.waveFront} viewBox="0 0 1440 320">
          <Path fill="#2391da86" d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,176C672,160,768,96,864,69.3C960,43,1056,53,1152,48C1248,43,1344,21,1392,10.7L1440,0L1440,320L0,320Z" />
        </Svg>
      </View>
    </View>
  );
}