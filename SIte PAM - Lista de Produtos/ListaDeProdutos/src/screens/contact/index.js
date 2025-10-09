import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Platform, KeyboardAvoidingView, ScrollView,}  from 'react-native';

export default function ContactScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviar = () => {
  
    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      const msg = 'Por favor preencha nome, e-mail e mensagem antes de enviar.';
      Platform.OS === 'web' ? alert(msg) : Alert.alert('Campos faltando', msg);
      return;
    }

    const texto = `Obrigado ${nome}, entraremos em contato no e-mail: ${email}`;

    if (Platform.OS === 'web') {
      alert(texto);
    } else {
      Alert.alert('Mensagem enviada', texto);
    }

    console.log('Contato enviado:', { nome, email, mensagem });

   
    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Fale Conosco</Text>

        <TextInput
          placeholder="Seu nome"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          placeholder="Seu e-mail"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Sua mensagem"
          style={[styles.input, styles.textArea]}
          multiline
          value={mensagem}
          onChangeText={setMensagem}
        />

        <View style={styles.actions}>
          <View style={styles.actionButton}>
            <Button title="Enviar" onPress={enviar} />
          </View>
          <View style={styles.actionButton}>
            <Button title="Voltar" onPress={() => navigation.goBack()} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    alignItems: 'stretch',
  },
  titulo: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 6,
  },
});

