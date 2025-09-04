import React from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import theme from '../styles/theme';

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: theme.colors.textLight,
    lineHeight: 22,
    marginBottom: 10,
  },
  list: {
    fontSize: 14,
    color: theme.colors.textLight,
    lineHeight: 22,
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 14,
    color: theme.colors.textLight,
  },
  link: {
    color: theme.colors.primary,
    textDecorationLine: 'underline',
  },
});

export const userData = {
  name: 'Maykon Lampião da Silva',
  title: 'Desenvolvedor Mobile | React Native',
  profilePic: require('../img/aluno.jpg'),
};

export const aboutMe = (
  <Text style={styles.text}>
    Desenvolvedor mobile com experiência em React Native e criação de interfaces ricas, responsivas e performáticas. Comprometido com a qualidade do código e apaixonado por inovação e boas práticas.
  </Text>
);

export const skills = (
  <View>
    <Text style={styles.list}>• React Native, Expo, JavaScript</Text>
    <Text style={styles.list}>• Estilização avançada com StyleSheet, Flexbox e Styled-components</Text>
    <Text style={styles.list}>• Integração com APIs RESTful e GraphQL</Text>
    <Text style={styles.list}>• Gerenciamento de estado (Redux, Context API)</Text>
    <Text style={styles.list}>• Git, Firebase, Figma, metodologias ágeis</Text>
  </View>
);

export const experience = (
  <View>
    <Text style={styles.text}>
      <Text style={{ fontWeight: 'bold' }}>• Portfólio Interativo (2025)</Text>
      {'\n'}Aplicativo criado com React Native para exibir currículo de forma visual, com imagem de fundo e seções interativas.
    </Text>
    <Text style={styles.text}>
      <Text style={{ fontWeight: 'bold' }}>• ToDo App</Text>
      {'\n'}Gerenciador de tarefas com CRUD local usando React Native e AsyncStorage.
    </Text>
  </View>
);

export const education = (
  <View>
    <Text style={styles.text}>
      Técnico em Desenvolvimento de Sistemas{'\n'}
      ETEC Cidade Tiradentes - Conclusão: 2026
    </Text>
  </View>
);

export const contact = (
  <View>
    <View style={styles.contactRow}>
      <FontAwesome name="envelope" size={18} color={theme.colors.primary} />
      <Text style={styles.contactText}>maykubb777@gmail.com</Text>
    </View>
    <View style={styles.contactRow}>
      <FontAwesome name="phone" size={18} color={theme.colors.primary} />
      <Text style={styles.contactText}>(11) 91234-5678</Text>
    </View>
    <View style={styles.contactRow}>
      <FontAwesome name="github" size={18} color={theme.colors.primary} />
      <Text style={styles.contactText}>
        <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/maykisz')}>
          github.com/maykonlampiao
        </Text>
      </Text>
    </View>
    <View style={styles.contactRow}>
      <FontAwesome name="linkedin" size={18} color={theme.colors.primary} />
      <Text style={styles.contactText}>
        <Text style={styles.link} onPress={() => Linking.openURL('https://linkedin.com/in/maykon')}>
          linkedin.com/in/maykon
        </Text>
      </Text>
    </View>
  </View>
);