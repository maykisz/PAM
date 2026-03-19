import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

export default function Item({ title, image, date, month, venue, city, organizer, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.eventCard}>
      <View style={styles.imageBadgeContainer}>
        <Image source={image} style={styles.eventImage} />
        <View style={styles.dateBadge}>
          <Text style={styles.dateMonth}>{month}</Text>
          <Text style={styles.dateDay}>{date}</Text>
        </View>
      </View>
      <View style={styles.eventInfo}>
        <Text style={styles.eventTitle} numberOfLines={2}>{title}</Text>
        <View style={styles.locationRow}>
          <Text style={styles.locationText}>{venue}</Text>
          <Text style={styles.cityText}>{city}</Text>
        </View>
        {organizer && (
          <Text style={styles.organizerText}>{organizer}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}