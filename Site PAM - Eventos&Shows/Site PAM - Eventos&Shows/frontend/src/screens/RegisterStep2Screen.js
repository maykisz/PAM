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
import styles from './styles/cadastro/Register2Styles';
import { fetchCep, registerUser } from '../services/api';

// 1. SEMPRE FORA DO COMPONENTE PRINCIPAL
const InputField = ({ label, style, ...props }) => (
  <View style={[styles.inputContainer, style]}>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput 
      style={styles.inputField} 
      placeholderTextColor="#9CA3AF" 
      {...props} 
    />
  </View>
);

export default function RegisterStep2Screen({ route, navigation }) {
  // Recebe os dados da etapa anterior para enviar ao backend.
  // Se route.params estiver vazio, usamos um objeto vazio para não quebrar.
  const { userData } = route.params || {};

  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');

  const handleCepBlur = async () => {
    if (cep.length !== 8) return;
    try {
      const response = await fetchCep(cep);
      setStreet(response.data.street || '');
      setNeighborhood(response.data.neighborhood || '');
      setCity(response.data.city || '');
      setState(response.data.state || '');
    } catch (error) {
      Alert.alert('Erro', 'CEP não encontrado ou erro na busca.');
    }
  };

  const handleRegister = async () => {
    if (!cep || !street || !neighborhood || !city || !state || !number) {
      return Alert.alert('Atenção', 'Preencha o endereço completo.');
    }

    try {
      const payload = { 
        ...userData, 
        cep, 
        street, 
        neighborhood, 
        city, 
        state, 
        number, 
        complement 
      };

      // Envia o payload final para o endpoint de cadastro.
      await registerUser(payload);
      Alert.alert('Sucesso', 'Cadastro concluído! Agora faça login.');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Erro', error?.response?.data?.message || 'Erro ao cadastrar.');
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={{ flex: 1 }}
    >
      <ScrollView 
        contentContainerStyle={styles.container} 
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        
        <View style={styles.header}>
          <Text style={styles.title}>Localização</Text>
          <Text style={styles.subtitle}>Onde você se encontra?</Text>
        </View>

        <View style={styles.loginCard}>
          <View style={styles.inputGroup}>
            
            <InputField 
              label="CEP" 
              placeholder="00000000" 
              keyboardType="number-pad"
              value={cep}
              onChangeText={text => setCep(text.replace(/[^0-9]/g, ''))}
              onBlur={handleCepBlur}
              maxLength={8}
            />

            <InputField 
              label="Rua" 
              placeholder="Nome da rua" 
              value={street} 
              onChangeText={setStreet} 
            />
            
            <InputField 
              label="Bairro" 
              placeholder="Seu bairro" 
              value={neighborhood} 
              onChangeText={setNeighborhood} 
            />

            <View style={styles.row}>
              <InputField 
                label="Cidade" 
                style={styles.flex1} 
                value={city} 
                onChangeText={setCity} 
              />
              <InputField 
                label="UF" 
                style={{ width: 80 }} 
                value={state} 
                onChangeText={setState} 
                maxLength={2} 
                autoCapitalize="uppercase" 
              />
            </View>

            <View style={styles.row}>
              <InputField 
                label="Número" 
                style={{ width: 100 }} 
                keyboardType="number-pad" 
                value={number} 
                onChangeText={setNumber} 
              />
              <InputField 
                label="Complemento" 
                style={styles.flex1} 
                placeholder="Apto, Bloco..." 
                value={complement} 
                onChangeText={setComplement} 
              />
            </View>

          </View>

          <TouchableOpacity 
            style={styles.loginButton} 
            onPress={handleRegister} 
            activeOpacity={0.8}
          >
            <Text style={styles.loginButtonText}>Finalizar Cadastro</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}