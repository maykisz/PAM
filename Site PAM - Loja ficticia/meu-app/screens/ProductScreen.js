import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

// Importa os estilos criados
import { productStyles } from "../styles/productStyles";

export default function ProductScreen({ route }) {

  // Pega os dados enviados pela navegação
  const { produto } = route.params;

  return (

    // Container principal da tela
    <View style={productStyles.container}>

      {/* Imagem do produto */}
      <Image
        source={produto.image}
        style={productStyles.image}
      />

      {/* Container dos textos */}
      <View style={productStyles.content}>

        {/* Marca */}
        <Text style={productStyles.brand}>
          {produto.brand}
        </Text>

        {/* Nome do produto */}
        <Text style={productStyles.title}>
          {produto.title}
        </Text>

        {/* Preço */}
        <Text style={productStyles.price}>
          {produto.price}
        </Text>

        {/* Quantidade disponível */}
        <Text style={productStyles.stock}>
          Estoque: {produto.quantity}
        </Text>

        {/* Botão */}
        <TouchableOpacity style={productStyles.button}>

          <Text style={productStyles.buttonText}>
            Adicionar ao carrinho
          </Text>

        </TouchableOpacity>

      </View>

    </View>

  );
}