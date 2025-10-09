import React from 'react';
import { View, Text, Button, Image } from 'react-native';

export default function DetailsScreen({route, navigation }) {
  let {productId, name, fornecedor, descricao, dimensoes, funcao, preco, img, img2} = route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detalhes</Text>
      <Text>Nome: {name}</Text>
      <Text>Fornecedor: {fornecedor}</Text>
      <Text>Descrição: {descricao}</Text>
      <Text>Dimenções: {dimensoes}</Text>
      <Text>Função: {funcao}</Text>
      <Text>Preço: R${preco}</Text>






      
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Image 
          source={img} 
          style={{ 
            width: 200, 
            height: 200, 
            marginRight: 10, 
            borderWidth: 2, 
            borderColor: 'black' 
          }} 
        />
        <Image 
          source={img2} 
          style={{ 
            width: 200, 
            height: 200, 
            borderWidth: 2, 
            borderColor: 'black' 
          }} 
        />
      </View>

      <Button title="Contato" onPress={() => navigation.navigate('Contact')} />

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}