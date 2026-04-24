import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, Alert, 
  ScrollView, KeyboardAvoidingView, Platform, ActivityIndicator 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles/cadastro/Register2Styles';
import { fetchCep, registerUser } from '../services/api';

// Componente de Input reutilizável
const InputField = ({ icon, style, ...props }) => (
  <View style={[styles.inputContainer, style]}>
    <Ionicons name={icon} size={20} color="#9CA3AF" style={styles.inputIcon} />
    <TextInput 
      style={styles.inputField} 
      placeholderTextColor="#9CA3AF" 
      {...props} 
    />
  </View>
);

export default function RegisterStep2Screen({ route, navigation }) {
  // Dados vindos da Etapa 1 (nome, email, senha)
  const { userData } = route.params || {};

  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  
  const [loadingCep, setLoadingCep] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  // Busca de CEP
  const handleCepBlur = async () => {
    if (cep.length !== 8) return;
    setLoadingCep(true);
    try {
      const response = await fetchCep(cep);
      // O || serve para aceitar diferentes formatos de API de CEP
      setStreet(response.data.street || response.data.logradouro || '');
      setNeighborhood(response.data.neighborhood || response.data.bairro || '');
      setCity(response.data.city || response.data.localidade || '');
      setState(response.data.state || response.data.uf || '');
    } catch (error) {
      Alert.alert('Erro', 'CEP não encontrado. Preencha manualmente.');
    } finally {
      setLoadingCep(false);
    }
  };

  // FUNÇÃO DE REGISTRO CORRIGIDA
  const handleRegister = async () => {
    // 1. Validação de campos obrigatórios
    if (!cep || !street || !neighborhood || !city || !state || !number) {
      return Alert.alert('Atenção', 'Preencha o endereço completo.');
    }

    setIsRegistering(true);

    // 2. Montagem do Payload (Verifique se os nomes batem com seu Backend)
    const payload = { 
      ...userData, // Traz nome, email, senha da tela anterior
      cep, 
      street, 
      neighborhood, 
      city, 
      state, 
      number, 
      complement 
    };

    console.log("ENVIANDO PARA O BACKEND:", payload);

    try {
      const response = await registerUser(payload);
      
      if (response.status === 201 || response.status === 200) {
        Alert.alert('Sucesso!', 'Conta criada com sucesso.');
        navigation.navigate('Login');
      }
    } catch (error) {
      // Se o backend retornou 400, a mensagem de erro detalhada estará aqui:
      const errorMsg = error.response?.data?.message || "Erro ao realizar cadastro.";
      console.log("ERRO DO SERVIDOR:", error.response?.data);
      Alert.alert('Falha no Cadastro', errorMsg);
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={{ flex: 1, backgroundColor: '#FFF' }}
    >
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1F2937" />
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <View style={styles.blueIcon}>
            <Ionicons name="location" size={40} color="#FFF" />
          </View>
          <Text style={styles.title}>Localização</Text>
          <Text style={styles.subtitle}>Onde você mora?</Text>
        </View>

        <View style={styles.form}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <InputField 
              icon="map-outline" 
              placeholder="CEP" 
              keyboardType="number-pad"
              value={cep}
              onChangeText={text => setCep(text.replace(/[^0-9]/g, ''))}
              onBlur={handleCepBlur}
              maxLength={8}
              style={{ flex: 1 }}
            />
            {loadingCep && <ActivityIndicator style={{ marginLeft: 10 }} color="#2563EB" />}
          </View>

          <InputField icon="business-outline" placeholder="Rua" value={street} onChangeText={setStreet} />
          <InputField icon="navigate-outline" placeholder="Bairro" value={neighborhood} onChangeText={setNeighborhood} />

          <View style={styles.row}>
            <InputField icon="trail-sign-outline" placeholder="Cidade" style={{ flex: 2, marginRight: 10 }} value={city} onChangeText={setCity} />
            <InputField icon="map-outline" placeholder="UF" style={{ flex: 1 }} value={state} onChangeText={setState} maxLength={2} autoCapitalize="uppercase" />
          </View>

          <View style={styles.row}>
            <InputField icon="home-outline" placeholder="Nº" style={{ flex: 1, marginRight: 10 }} keyboardType="number-pad" value={number} onChangeText={setNumber} />
            <InputField icon="add-circle-outline" placeholder="Comp." style={{ flex: 2 }} value={complement} onChangeText={setComplement} />
          </View>

          <TouchableOpacity 
            style={[styles.cadastrarButton, isRegistering && { opacity: 0.7 }]} 
            onPress={handleRegister} 
            disabled={isRegistering}
          >
            {isRegistering ? <ActivityIndicator color="#FFF" /> : <Text style={styles.cadastrarButtonText}>Finalizar</Text>}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}