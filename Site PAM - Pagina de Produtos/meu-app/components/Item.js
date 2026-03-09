// Importa React
import React from 'react';

// Importa componentes do React Native
import { View, Text, Image } from 'react-native';

// Importa os estilos criados
import { styles } from '../styles/styles';

// Cria o componente Item
// Ele recebe dados do produto como propriedades (props)
export default function Item({ title, brand, price, quantity, image }) {

  return (

    // Card do produto
    <View style={styles.item}>

      {/* Mostra a imagem do produto */}
      <Image source={image} style={styles.image} />

      {/* Container das informações */}
      <View style={styles.infoContainer}>

        {/* Mostra a marca */}
        <Text style={styles.brand}>{brand}</Text>

        {/* Nome do produto */}
        <Text style={styles.title}>{title}</Text>

        {/* Linha com preço e estoque */}
        <View style={styles.priceRow}>

          {/* Preço */}
          <Text style={styles.price}>{price}</Text>

          {/* Quantidade disponível */}
          <Text style={styles.quantity}>
            Estoque: {quantity}
          </Text>

        </View>

      </View>

    </View>
  );
}