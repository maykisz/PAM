import React from "react";
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";
// Adicione o Bell dentro das chaves { ... }
import { Users, LayoutGrid, Bell } from "lucide-react-native";
import { tarefas } from "../Banco/banco";
import { HomeStyles as styles } from "../styles/HomeStyles";
import { TaskListStyles as taskList } from "../styles/TaskListStyles";
import { COLORS } from "../styles/CommonStyles";

export default function HomeScreen({ navigation }) {
  
  // Renderizador de itens da lista (resumido para a Home)
  const renderMiniTask = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.7}
      style={taskList.card}
      onPress={() => navigation.navigate("DetalhesTarefa", { tarefa: item })}
    >
      <View style={styles.miniStatus} />
      <View style={{ flex: 1 }}>
        <Text style={taskList.title}>{item.title}</Text>
        <Text numberOfLines={1} style={taskList.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header Estilizado */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Bem-vindo de volta,</Text>
          <Text style={styles.userName}>Dashboard de Tarefas</Text>
        </View>
        <TouchableOpacity style={styles.notificationBtn}>
          <Bell color={COLORS.textHeader} size={22} />
        </TouchableOpacity>
      </View>

      {/* Menu de Ações Rápidas */}
      <View style={styles.actionContainer}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => navigation.navigate("Desenvolvedores")}
        >
          <View style={[styles.iconBox, { backgroundColor: '#EEF2FF' }]}>
            <Users color={COLORS.primary} size={24} />
          </View>
          <Text style={styles.actionLabel}>Time</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => navigation.navigate("Tarefas")} // Link para a lista completa
        >
          <View style={[styles.iconBox, { backgroundColor: '#ECFDF5' }]}>
            <LayoutGrid color={COLORS.secondary} size={24} />
          </View>
          <Text style={styles.actionLabel}>Projetos</Text>
        </TouchableOpacity>
      </View>

      {/* Seção de Tarefas Recentes */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Tarefas Recentes</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Tarefas")}>
          <Text style={styles.seeAll}>Ver todas</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tarefas.slice(0, 5)} // Mostra apenas as 5 primeiras na Home
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMiniTask}
        contentContainerStyle={styles.listPadding}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}