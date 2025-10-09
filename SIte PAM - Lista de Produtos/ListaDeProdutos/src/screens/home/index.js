import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import produtos from '../../data/produtos.js'


export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
       {produtos.map((produto) => (
        <View key={produto.id} style={styles.produto}>
          <Text>{produto.name}</Text>
          <Text>{produto.descricao}</Text>
          <Text>Preço: R$ {produto.preco.toFixed(2)}</Text>
          <Image source={produto.img} style={{ width: 200, height: 200, marginTop: 20, marginBottom: 10 }} />
          <Button
            title="Ir para Detalhes"
            onPress={() =>
              navigation.navigate('Details', {
                productId: produto.id,
                name: produto.name,
                preco: produto.preco,
                img: produto.img,
                img2: produto.img2
              })
            }
          />
        </View>
      ))}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20
  },
  produto: {
    marginVertical: 15,
    alignItems: 'center'
  }, 
  button: {
    backgroundColor: '#0000,'
  },
  texto: {
    fontSize: '30px',
  }
})