import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { developers } from "../Banco/banco";
import { styles } from "../styles/DeveloperStyles";

export default function DevelopersScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={developers}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={item.image}
              style={styles.avatar}
            />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.role}>{item.role}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}