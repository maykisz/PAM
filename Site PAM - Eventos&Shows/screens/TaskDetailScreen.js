import React from "react";
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";
import { TaskDetailStyles as styles } from "../styles/TaskListStyles";
import { ArrowLeft, Trash2, Calendar, ShieldAlert, Check } from "lucide-react-native";
import { COLORS } from "../styles/CommonStyles";

export default function TaskDetailScreen({ route, navigation }) {
  const { tarefa } = route.params || {};

  if (!tarefa) return null;

  const isCompleted = tarefa.status?.toLowerCase() === "concluída";

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Navbar Superior */}
      <View style={styles.headerActions}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 8 }}>
          <ArrowLeft color={COLORS.textHeader} size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 8 }}>
          <Trash2 color={COLORS.danger} size={22} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Status Badge */}
        <View style={[styles.badge, { backgroundColor: isCompleted ? '#D1FAE5' : '#FEF3C7' }]}>
          <Text style={[styles.badgeText, { color: isCompleted ? COLORS.secondary : COLORS.warning }]}>
            {tarefa.status || "Pendente"}
          </Text>
        </View>

        <Text style={styles.mainTitle}>{tarefa.title}</Text>
        
        <Text style={styles.label}>Descrição Detalhada</Text>
        <Text style={styles.description}>
          {tarefa.descricaoDetalhada || tarefa.description}
        </Text>

        {/* Info Grid */}
        <View style={styles.infoGrid}>
          <View style={styles.infoBox}>
            <Calendar color={COLORS.primary} size={18} />
            <View style={{ marginLeft: 8 }}>
              <Text style={styles.label}>Prazo</Text>
              <Text style={styles.value}>{tarefa.prazo || "Indefinido"}</Text>
            </View>
          </View>

          <View style={styles.infoBox}>
            <ShieldAlert color={COLORS.warning} size={18} />
            <View style={{ marginLeft: 8 }}>
              <Text style={styles.label}>Prioridade</Text>
              <Text style={styles.value}>{tarefa.prioridade || "Média"}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer Fixo */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnComplete} activeOpacity={0.9}>
          <Check color="#FFF" size={20} />
          <Text style={styles.btnCompleteText}>Finalizar Tarefa</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}