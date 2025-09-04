import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <ImageBackground
      source={require('./src/img/profile.avif')}
      style={styles.background}
      blurRadius={3}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* HEADER */}
        <View style={styles.header}>
          <Image
            source={require('./src/img/aluno.jpg')}
            style={styles.profilePic}
          />
          <Text style={styles.name}>Maykon Lampião da Silva</Text>
          <Text style={styles.title}>Desenvolvedor Mobile | React Native</Text>
        </View>

        {/* SOBRE */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>💡 Sobre Mim</Text>
          <Text style={styles.sectionText}>
            Desenvolvedor mobile com experiência em React Native e criação de
            interfaces ricas, responsivas e performáticas. Comprometido com a
            qualidade do código e apaixonado por inovação e boas práticas.
          </Text>
        </View>

        {/* HABILIDADES */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>🛠️ Habilidades Técnicas</Text>
          <Text style={styles.sectionText}>
            • React Native, Expo, JavaScript{'\n'}
            • Estilização com StyleSheet e Flexbox{'\n'}
            • Integração com APIs RESTful{'\n'}
            • Git, Figma, Firebase
          </Text>
        </View>

        {/* EXPERIÊNCIA */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>📱 Experiência</Text>
          <Text style={styles.sectionText}>
            • **Portfólio Interativo (2025)**{'\n'}
            Aplicativo criado com React Native para exibir currículo de forma visual, com imagem de fundo e seções interativas.{'\n\n'}
            • **ToDo App**{'\n'}
            Gerenciador de tarefas com CRUD local usando React Native e AsyncStorage.
          </Text>
        </View>

        {/* EDUCAÇÃO */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>🎓 Educação</Text>
          <Text style={styles.sectionText}>
            Técnico em Desenvolvimento de Sistemas{'\n'}
            SENAI - Conclusão: 2025
          </Text>
        </View>

        {/* CONTATO */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>📞 Contato</Text>
          <View style={styles.contactRow}>
            <Ionicons name="mail" size={20} color="#333" />
            <Text style={styles.contactText}>maykon@email.com</Text>
          </View>
          <View style={styles.contactRow}>
            <FontAwesome name="phone" size={20} color="#333" />
            <Text style={styles.contactText}>(00) 91234-5678</Text>
          </View>
          <View style={styles.contactRow}>
            <FontAwesome name="github" size={20} color="#333" />
            <Text style={styles.contactText}>github.com/maykonlampiao</Text>
          </View>
          <View style={styles.contactRow}>
            <FontAwesome name="linkedin" size={20} color="#333" />
            <Text style={styles.contactText}>linkedin.com/in/maykon</Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
    borderRadius: 16,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  title: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 4,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
  },
  sectionText: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#444',
  },
});
