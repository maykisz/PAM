import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { productStyles } from "../styles/productStyles";

export default function ProductScreen({ route }) {
  
  const { evento } = route.params;

  return (

    <View style={productStyles.container}>

      <Image
        source={evento.image}
        style={productStyles.image}
      />

      <View style={productStyles.content}>

        <Text style={productStyles.title}>
          {evento.title}
        </Text>

        <Text style={productStyles.subtitle}>
          {evento.date}/{evento.month.toLowerCase()} • {evento.time} • {evento.venue}
        </Text>
        <Text style={productStyles.location}>{evento.city} • São Paulo</Text>

        <Text style={productStyles.description}>
          {evento.description}
        </Text>

        <Text style={productStyles.price}>
          Ingresso: {evento.price}
        </Text>

        {/* Botão */}
        <TouchableOpacity style={productStyles.button}>

          <Text style={productStyles.buttonText}>
            Comprar ingresso
          </Text>

        </TouchableOpacity>

      </View>

    </View>

  );
}