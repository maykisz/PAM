import React from 'react';
import { ScrollView, ImageBackground, StatusBar } from 'react-native';
import Header from './src/components/Header';
import Card from './src/components/Card';
import {
  aboutMe,
  skills,
  experience,
  education,
  contact,
} from './src/components/data/data';
import { globalStyles } from './src/components/styles/globalStyles';
import theme from './src/components/styles/theme';

export default function App() {
  return (
    <ImageBackground
      source={require('./src/components/img/agenda.jpg')}
      style={globalStyles.background}
      blurRadius={3}
    >
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.dark} />
      <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
        {/* COMPONENTE DE CABEÇALHO */}
        <Header />

        {/* SEÇÕES DO CURRÍCULO COM CARDS */}
        <Card title="Sobre Mim" icon="person">
          {aboutMe}
        </Card>

        <Card title="Habilidades Técnicas" icon="code-slash">
          {skills}
        </Card>

        <Card title="Experiência" icon="laptop">
          {experience}
        </Card>

        <Card title="Educação" icon="school">
          {education}
        </Card>

        <Card title="Contato" icon="call">
          {contact}
        </Card>
      </ScrollView>
    </ImageBackground>
  );
}