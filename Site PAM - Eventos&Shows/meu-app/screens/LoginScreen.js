import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "../styles/LoginStyles";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    if (username.trim().toLowerCase() === "admin" && password === "admin") {
      setError("");
      navigation.replace("Home");
      return;
    }
    setError("Usuário ou senha incorretos");
  }

  return (
    <KeyboardAvoidingView
      style={styles.loginContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.titleBem}>
        Bem-vindo
      </Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TextInput
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.userAndPassoword}>
        Use usuário e senha: admin
      </Text>
    </KeyboardAvoidingView>
  );
}
