import React, { useState } from 'react';

import {
  ActivityIndicator,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './LoginScreen.css';

type LoginScreenProps = {
  onLogin: (email: string, senha: string) => void;
  loading: boolean;
  error?: string;

  onForgotPassword?: () => void;
  onGoogleLogin?: () => void;
  onCreateAccount?: () => void;
};

export default function LoginScreen({
  onLogin,
  loading,
  error,
  onForgotPassword,
  onGoogleLogin,
  onCreateAccount,
}: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const submit = () => {
    if (!email.trim() || !senha.trim() || loading) {
      return;
    }

    onLogin(email.trim(), senha);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <View style={styles.screen}>
            {/* ==========================================
                TOPO COM A IMAGEM
            ========================================== */}

            <ImageBackground
              source={require('../imbs/login/fundo.png')}
              resizeMode="stretch"
              style={styles.heroBackground}
            >
              <View style={styles.heroContent}>
                <View style={styles.logoBox}>
                  <Image
                    source={require('../imbs/logo/minimal.png')}
                    resizeMode="contain"
                    style={styles.logo}
                  />
                </View>

                <Text style={styles.welcome}>
                  Welcome Back
                </Text>

                <Text style={styles.title}>
                  Sign in to{'\n'}your account
                </Text>

                <Text style={styles.subtitle}>
                  Everything you need, all in one place.
                </Text>
              </View>
            </ImageBackground>

            {/* ==========================================
                ÁREA BRANCA
            ========================================== */}

            <View style={styles.whiteSection}>
              <View style={styles.form}>
                {error ? (
                  <View style={styles.errorBox}>
                    <MaterialCommunityIcons
                      name="alert-circle-outline"
                      size={17}
                      color="#E94C32"
                    />

                    <Text style={styles.errorText}>
                      {error}
                    </Text>
                  </View>
                ) : null}

                {/* EMAIL */}

                <View style={styles.field}>
                  <Text style={styles.label}>
                    Email
                  </Text>

                  <View style={styles.inputContainer}>
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={21}
                      color="#9A9A9A"
                    />

                    <TextInput
                      value={email}
                      onChangeText={setEmail}
                      style={styles.input}
                      placeholder="seu@email.com"
                      placeholderTextColor="#AAAAAA"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      autoComplete="email"
                      returnKeyType="next"
                      selectionColor="#F05236"
                    />
                  </View>
                </View>

                {/* PASSWORD */}

                <View style={styles.field}>
                  <View style={styles.passwordHeader}>
                    <Text style={styles.label}>
                      Senha
                    </Text>

                    <Pressable
                      onPress={onForgotPassword}
                      hitSlop={10}
                    >
                      <Text style={styles.forgotPassword}>
                        Esqueceu a senha?
                      </Text>
                    </Pressable>
                  </View>

                  <View style={styles.inputContainer}>
                    <MaterialCommunityIcons
                      name="lock-outline"
                      size={21}
                      color="#9A9A9A"
                    />

                    <TextInput
                      value={senha}
                      onChangeText={setSenha}
                      style={styles.input}
                      placeholder="Insira sua senha"
                      placeholderTextColor="#AAAAAA"
                      secureTextEntry={!showPassword}
                      autoCapitalize="none"
                      returnKeyType="done"
                      selectionColor="#F05236"
                      onSubmitEditing={submit}
                    />

                    <Pressable
                      style={styles.eyeButton}
                      hitSlop={10}
                      onPress={() =>
                        setShowPassword((current) => !current)
                      }
                    >
                      <MaterialCommunityIcons
                        name={
                          showPassword
                            ? 'eye-outline'
                            : 'eye-off-outline'
                        }
                        size={21}
                        color="#999999"
                      />
                    </Pressable>
                  </View>
                </View>

                {/* SIGN IN */}

                <Pressable
                  disabled={loading}
                  onPress={submit}
                  style={({ pressed }) => [
                    styles.signInButton,
                    pressed &&
                      !loading &&
                      styles.signInPressed,
                    loading && styles.disabled,
                  ]}
                >
                  {loading ? (
                    <ActivityIndicator color="#FFFFFF" />
                  ) : (
                    <>
                      <Text style={styles.signInText}>
                        Entre
                      </Text>

                      <View style={styles.arrowCircle}>
                        <MaterialCommunityIcons
                          name="arrow-right"
                          size={23}
                          color="#FFFFFF"
                        />
                      </View>
                    </>
                  )}
                </Pressable>

                {/* DIVISOR */}

                <View style={styles.dividerRow}>
                  <View style={styles.divider} />

                  <Text style={styles.orText}>
                    or
                  </Text>

                  <View style={styles.divider} />
                </View>

                {/* GOOGLE */}

                <Pressable
                  onPress={onGoogleLogin}
                  style={({ pressed }) => [
                    styles.googleButton,
                    pressed && styles.googlePressed,
                  ]}
                >
                  <MaterialCommunityIcons
                    name="google"
                    size={23}
                    color="#4285F4"
                  />

                  <Text style={styles.googleText}>
                    Continue com o Google
                  </Text>
                </Pressable>

                {/* CADASTRO */}

                <View style={styles.registerRow}>
                  <Text style={styles.registerQuestion}>
                    Não tem uma conta?
                  </Text>

                  <Pressable
                    onPress={onCreateAccount}
                    hitSlop={8}
                  >
                    <Text style={styles.registerLink}>
                      Registre-se agora
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}