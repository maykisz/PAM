import React, { useCallback } from "react";
import { 
  View, Text, FlatList, TouchableOpacity, 
  StatusBar, SafeAreaView 
} from "react-native";
import { Circle, CheckCircle2, ChevronRight, Plus } from "lucide-react-native";
import { tarefas } from "../Banco/banco";
import { TaskListStyles as styles } from "../styles/TaskListStyles";
import { COLORS } from "../styles/CommonStyles";

const TaskItem = React.memo(({ item, onPress }) => (
  <TouchableOpacity 
    activeOpacity={0.7} 
    style={[styles.card, item.completed && styles.cardDone]}
    onPress={() => onPress(item)}
  >
    <View>
      {item.completed ? 
        <CheckCircle2 color={COLORS.secondary} size={24} /> : 
        <Circle color={COLORS.textLight} size={24} />
      }
    </View>
    
    <View style={{ flex: 1, marginLeft: 15 }}>
      <Text style={[styles.title, item.completed && { textDecorationLine: 'line-through' }]}>
        {item.title}
      </Text>
      <Text numberOfLines={1} style={{ color: COLORS.textLight, fontSize: 13 }}>
        {item.description}
      </Text>
    </View>

    <ChevronRight color={COLORS.border} size={20} />
  </TouchableOpacity>
));

export default function TasksScreen({ navigation }) {
  const handlePress = useCallback((tarefa) => {
    navigation.navigate("TaskDetail", { tarefa });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tarefas</Text>
        <Text style={{ color: COLORS.textLight }}>{tarefas.length} pendentes hoje</Text>
      </View>

      <FlatList
        data={tarefas}
        contentContainerStyle={styles.listContent}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TaskItem item={item} onPress={handlePress} />}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
        <Plus color="#FFF" size={30} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}