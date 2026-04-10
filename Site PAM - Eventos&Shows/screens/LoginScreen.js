import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Animated,
  StatusBar,
} from "react-native";
import { styles } from "../styles/LoginStyles";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  // Animação de entrada sutil
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 800, useNativeDriver: true }),
    ]).start();
  }, []);

  const handleLogin = () => {
    if (username.toLowerCase() === "admin" && password === "admin") {
      setLoading(true);
      setTimeout(() => {
        navigation.replace("Home");
      }, 1500);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
      <StatusBar barStyle="dark-content" />
      
      <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        <View style={styles.header}>
          <Text style={styles.brandText}>VORTEX</Text>
          <Text style={styles.welcomeText}>Identifique-se para acessar a plataforma.</Text>
        </View>

        <View style={styles.form}>
          <View style={[styles.inputContainer, focusedInput === 'user' && styles.inputFocused]}>
            <Text style={styles.label}>NOME DE USUÁRIO</Text>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
              onFocus={() => setFocusedInput('user')}
              onBlur={() => setFocusedInput(null)}
              autoCapitalize="none"
              selectionColor="#000"
            />
          </View>

          <View style={[styles.inputContainer, focusedInput === 'pass' && styles.inputFocused]}>
            <Text style={styles.label}>SENHA</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              onFocus={() => setFocusedInput('pass')}
              onBlur={() => setFocusedInput(null)}
              secureTextEntry
              selectionColor="#000"
            />
          </View>

          <TouchableOpacity 
            activeOpacity={0.8}
            onPress={handleLogin}
            style={styles.button}
          >
            {loading ? (
              <ActivityIndicator color="#FFF" size="small" />
            ) : (
              <Text style={styles.buttonText}>Continuar</Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Standard Access · v1.0.4</Text>
        </View>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}