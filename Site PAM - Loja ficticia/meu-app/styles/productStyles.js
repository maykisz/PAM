// Importa o StyleSheet da biblioteca React Native
// Ele serve para criar estilos otimizados para mobile
import { StyleSheet } from "react-native";


// Exporta os estilos para serem usados em outras telas
export const productStyles = StyleSheet.create({

  // Container principal da tela do produto
  container: {

    // Faz o container ocupar toda a altura da tela
    flex: 1,

    // Define o fundo da tela como branco
    backgroundColor: "#FFFFFF",
  },


  // Estilo da imagem grande do produto
  image: {

    // Faz a imagem ocupar toda a largura da tela
    width: "100%",

    // Define uma altura fixa para a imagem
    height: 320,

    // Faz a imagem preencher o espaço sem deformar
    resizeMode: "cover",
  },


  // Container que segura os textos do produto
  content: {

    // Espaçamento interno em todos os lados
    padding: 20,
  },


  // Estilo da marca (ex: SUPREME)
  brand: {

    // Tamanho da fonte
    fontSize: 14,

    // Cor cinza clara
    color: "#888",

    // Deixa o texto em maiúsculo
    textTransform: "uppercase",

    // Espaçamento entre letras
    letterSpacing: 1,

    // Espaço abaixo do texto
    marginBottom: 6,
  },


  // Estilo do nome do produto
  title: {

    // Fonte maior para destacar o produto
    fontSize: 26,

    // Fonte em negrito
    fontWeight: "bold",

    // Cor quase preta
    color: "#111",

    // Espaço abaixo do título
    marginBottom: 10,
  },


  // Estilo do preço
  price: {

    // Fonte grande
    fontSize: 24,

    // Peso forte da fonte
    fontWeight: "700",

    // Cor preta
    color: "#000",

    // Espaço abaixo do preço
    marginBottom: 20,
  },


  // Estilo da quantidade em estoque
  stock: {

    // Tamanho pequeno
    fontSize: 14,

    // Cor cinza
    color: "#666",

    // Espaço abaixo
    marginBottom: 25,
  },


  // Estilo do botão
  button: {

    // Cor de fundo preta
    backgroundColor: "#000",

    // Espaçamento interno vertical
    paddingVertical: 16,

    // Bordas arredondadas
    borderRadius: 10,

    // Centraliza o conteúdo do botão
    alignItems: "center",
  },


  // Estilo do texto dentro do botão
  buttonText: {

    // Cor do texto branca
    color: "#FFF",

    // Tamanho da fonte
    fontSize: 16,

    // Peso da fonte semi-negrito
    fontWeight: "600",
  }

});