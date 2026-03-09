// Importa React
import React from "react";

// Importa componentes visuais
import { View, Text, Image, TouchableOpacity } from "react-native";

// Importa os estilos
import { styles } from "../styles/styles";

// Componente do produto
export default function Item({ title, image, price, brand, onPress }) {

  return (

    // TouchableOpacity cria um botão clicável
    <TouchableOpacity

      // função chamada quando o usuário toca no produto
      onPress={onPress}

    >

      {/* Card do produto */}
      <View style={styles.item}>

        {/* Imagem do produto */}
        <Image source={image} style={styles.image} />

        {/* Marca */}
        <Text style={styles.brand}>
          {brand}
        </Text>

        {/* Nome do produto */}
        <Text style={styles.title}>
          {title}
        </Text>

        {/* Preço */}
        <Text style={styles.price}>
          {price}
        </Text>

      </View>

    </TouchableOpacity>

  );
}