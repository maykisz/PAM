import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { styles } from './styles/styles.js';

export default function Aplicacao() {

  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [resultado, setResultado] = useState(0);
  const [resultado1, setResultado1] = useState(0);
  const [resultado2, setResultado2] = useState(0);
  const [resultado3, setResultado3] = useState(0);

  const somar = () => {

    if (n1 === '' || n2 === '') {
      Alert.alert('Erro', 'Digite os dois números!');
      return;
    }

    const r = parseFloat(n1) + parseFloat(n2) 
    setResultado(r);

    const r1 = parseFloat(n1) - parseFloat(n2) 
    setResultado1(r1);

    const r2 = parseFloat(n1) * parseFloat(n2) 
    setResultado2(r2);

    const r3 = parseFloat(n1) / parseFloat(n2) 
    setResultado1(r3);
  };


  const limpar = () => {
    setN1('');
    setN2('');
    setResultado(0);
  };

  return (
    <View style={styles.tudo}>

      <Text style={styles.titulo}>Calculadora Simples</Text>

      <View style={styles.containerInput}>
        <Text style={styles.label}>Primeiro número</Text>
        <TextInput
          style={styles.caixaDeTexto}
          placeholder="Digite o primeiro número"
          placeholderTextColor="#6f6f6f"
          keyboardType="numeric"
          value={n1}
          onChangeText={setN1}
        />
      </View>

      <View style={styles.containerInput}>
        <Text style={styles.label}>Segundo número</Text>
        <TextInput
          style={styles.caixaDeTexto}
          placeholder="Digite o segundo número"
          placeholderTextColor="#6f6f6f"
          keyboardType="numeric"
          value={n2}
          onChangeText={setN2}
        />
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={somar}
        activeOpacity={0.7}
      >
        <Text style={styles.textoBotao}>Somar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoSecundario}
        onPress={limpar}
        activeOpacity={0.7}
      >
        <Text style={styles.textoBotao}>Limpar</Text>
      </TouchableOpacity>

      <Text style={styles.resposta}>Resultado soma: {resultado}</Text>
      <Text style={styles.resposta}>Resultado subtração: {resultado1}</Text>
      <Text style={styles.resposta}>Resultado multiplicação: {resultado2}</Text>
      <Text style={styles.resposta}>Resultado divisão: {resultado3}</Text>

    </View>
  );
};