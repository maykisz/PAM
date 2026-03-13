import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { productStyles } from "../styles/productStyles";

export default function ProductScreen({ route }) {
  
  const { produto } = route.params;

  return (

    <View style={productStyles.container}>

      <Image
        source={produto.image}
        style={productStyles.image}
      />

      <Image
        source={produto.image}
        style={productStyles.image2}
      />

      <View style={productStyles.content}>

        <Text style={productStyles.brand}>
          {produto.brand}
        </Text>

        <Text style={productStyles.title}>
          {produto.title}
        </Text>

        <Text style={productStyles.price}>
          {produto.price}
        </Text>

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