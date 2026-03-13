// Importa React
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

export default function Item({ title, image, price, brand, onPress }) {

  return (

    <TouchableOpacity
      onPress={onPress}
    >

      <View style={styles.item}>

        <Image source={image} style={styles.image} />

        <Text style={styles.brand}>
          {brand}
        </Text>

        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.price}>
          {price}
        </Text>

      </View>

    </TouchableOpacity>

  );
}