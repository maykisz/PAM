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
import { Ionicons } from '@expo/vector-icons'; // Certifique-se de ter o expo-icons instalado
import styles from './styles/cadastro/Register1Styles';

// Componente de Input atualizado com ícones (conforme a imagem)
const InputField = ({ icon, label, isPassword, showPassword, togglePassword, ...props }) => (
  <View style={styles.inputContainer}>
    <Ionicons name={icon} size={20} color="#9CA3AF" style={styles.inputIcon} />
    <TextInput 
      style={styles.inputField} 
      placeholderTextColor="#9CA3AF" 
      secureTextEntry={isPassword && !showPassword}
      {...props} 
    />
    {isPassword && (
      <TouchableOpacity onPress={togglePassword}>
        <Ionicons 
          name={showPassword ? "eye-outline" : "eye-off-outline"} 
          size={20} 
          color="#9CA3AF" 
        />
      </TouchableOpacity>
    )}
  </View>
);

export default function RegisterStep1Screen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handleNext = () => {
    if (!name || !email || !phone || !password || !confirmPassword) {
      return Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
    }
    if (!acceptedTerms) {
      return Alert.alert('Atenção', 'Você precisa aceitar os Termos de Uso.');
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
      style={{ flex: 1, backgroundColor: '#FFF' }}
    >
      <ScrollView 
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Botão de Voltar */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1F2937" />
        </TouchableOpacity>

        {/* Ícone de Check Azul */}
        <View style={styles.logoContainer}>
          <View style={styles.blueIcon}>
            <Ionicons name="checkmark" size={40} color="#FFF" />
          </View>
          <Text style={styles.title}>Criar conta</Text>
          <Text style={styles.subtitle}>Preencha os dados abaixo para começar</Text>
        </View>

        <View style={styles.form}>
          <InputField 
            icon="person-outline"
            placeholder="Nome completo"
            value={name}
            onChangeText={setName}
          />

          <InputField 
            icon="mail-outline"
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <InputField 
            icon="call-outline"
            placeholder="Telefone"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <InputField 
            icon="lock-closed-outline"
            placeholder="Senha"
            isPassword
            showPassword={showPass}
            togglePassword={() => setShowPass(!showPass)}
            value={password}
            onChangeText={setPassword}
          />

          <InputField 
            icon="lock-closed-outline"
            placeholder="Confirmar senha"
            isPassword
            showPassword={showConfirmPass}
            togglePassword={() => setShowConfirmPass(!showConfirmPass)}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          {/* Checkbox de Termos */}
          <View style={styles.termsContainer}>
            <TouchableOpacity 
              style={[styles.checkbox, acceptedTerms && styles.checkboxChecked]} 
              onPress={() => setAcceptedTerms(!acceptedTerms)}
            >
              {acceptedTerms && <Ionicons name="checkmark" size={14} color="#FFF" />}
            </TouchableOpacity>
            <Text style={styles.termsText}>
              Eu aceito os <Text style={styles.linkText}>Termos de Uso</Text> e a <Text style={styles.linkText}>Política de Privacidade</Text>
            </Text>
          </View>

          <TouchableOpacity 
            style={styles.cadastrarButton} 
            onPress={handleNext}
          >
            <Text style={styles.cadastrarButtonText}>Cadastrar</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Já tem uma conta? </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.footerLink}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      
    </KeyboardAvoidingView>

    
  );
}