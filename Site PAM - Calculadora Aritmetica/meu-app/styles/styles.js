import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export const styles = StyleSheet.create({
  tudo: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'center'
  },

  titulo: {
    color: '#ff4d6d',
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold'
  },

  containerInput: {
    marginBottom: 20
  },

  label: {
    color: '#ccc',
    marginBottom: 5
  },

  caixaDeTexto: {
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#1e1e1e',
    color: '#fff',
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 55
  },

  botao: {
    backgroundColor: '#ff4d6d',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10
  },

  botaoSecundario: {
    backgroundColor: '#333',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10
  },

  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },

  resposta: {
    color: '#ff4d6d',
    fontSize: 26,
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold'
  }
});