import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import styles from './styles/cadastro/Register1Styles';

// 1. MOVA O INPUTFIELD PARA FORA DA FUNÇÃO PRINCIPAL
const InputField = ({ label, ...props }) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput 
      style={styles.inputField} 
      placeholderTextColor="#9CA3AF" 
      {...props} 
    />
  </View>
);

export default function RegisterStep1Screen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNext = () => {
    if (!name || !email || !phone || !password || !confirmPassword) {
      return Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
    }

    if (password.length < 8) {
      return Alert.alert('Atenção', 'A senha deve ter ao menos 8 caracteres.');
    }

    if (password !== confirmPassword) {
      return Alert.alert('Atenção', 'As senhas precisam ser iguais.');
    }

    const userData = { name, email, phone, password, confirmPassword };
    navigation.navigate('RegisterStep2', { userData });
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={{ flex: 1 }}
    >
      <ScrollView 
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled" // Dica extra: ajuda no clique em botões com teclado aberto
      >
        <View style={styles.header}>
          <Text style={styles.title}>Cadastro Seguro</Text>
          <Text style={styles.instructionText}>
            Preencha seus dados para criar sua conta.
          </Text>
        </View>

        <View style={styles.loginCard}>
          <View style={styles.inputGroup}>
            <InputField 
              label="Nome completo"
              placeholder="Ex: João Silva"
              value={name}
              onChangeText={setName}
            />

            <InputField 
              label="E-mail"
              placeholder="seu@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <InputField 
              label="Telefone"
              placeholder="(00) 00000-0000"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={text => setPhone(text.replace(/[^0-9]/g, ''))}
            />

            <InputField 
              label="Senha"
              placeholder="Mínimo 8 caracteres"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <InputField 
              label="Confirmar Senha"
              placeholder="Repita a senha"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>

          <TouchableOpacity 
            style={styles.loginButton} 
            onPress={handleNext}
            activeOpacity={0.8}
          >
            <Text style={styles.loginButtonText}>Próxima etapa</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Já possui uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.footerLink}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}