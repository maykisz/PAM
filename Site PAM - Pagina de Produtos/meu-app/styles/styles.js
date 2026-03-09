// Importa o StyleSheet do React Native
// Ele serve para criar estilos otimizados (melhor performance)
import { StyleSheet } from "react-native";

// Exporta o objeto styles para poder usar em outros arquivos
export const styles = StyleSheet.create({

  // Container principal da tela
  container: {

    // flex:1 faz o container ocupar toda a tela
    flex: 1,

    // Cor de fundo da tela (cinza claro moderno)
    backgroundColor: "#F2F2F2",

    // Espaço no topo da tela
    paddingTop: 20,
  },


  // Card do produto
  item: {

    // Fundo branco do card
    backgroundColor: "#FFFFFF",

    // Espaçamento horizontal (esquerda/direita)
    marginHorizontal: 18,

    // Espaçamento vertical entre os cards
    marginVertical: 12,

    // Bordas arredondadas modernas
    borderRadius: 16,

    // Impede conteúdo de ultrapassar as bordas
    overflow: "hidden",

    // Cor da sombra
    shadowColor: "#000",

    // Posição da sombra
    shadowOffset: {
      width: 0,
      height: 6
    },

    // Transparência da sombra
    shadowOpacity: 0.08,

    // Suavidade da sombra
    shadowRadius: 10,

    // Sombra para Android
    elevation: 6,
  },


  // Estilo da imagem do produto
  image: {

    // Largura ocupa todo o card
    width: "100%",

    // Altura fixa da imagem
    height: 190,

    // Faz a imagem preencher o espaço sem deformar
    resizeMode: "cover",
  },


  // Container das informações (texto)
  infoContainer: {

    // Espaçamento interno
    padding: 16,
  },


  // Estilo da marca (ex: SUPREME)
  brand: {

    // Tamanho pequeno
    fontSize: 12,

    // Peso da fonte (semi-negrito)
    fontWeight: "600",

    // Cor cinza
    color: "#8A8A8A",

    // Espaçamento entre letras (visual mais premium)
    letterSpacing: 1,

    // Deixa tudo em maiúsculo
    textTransform: "uppercase",

    // Espaço abaixo da marca
    marginBottom: 4,
  },


  // Nome do produto
  title: {

    // Fonte maior
    fontSize: 18,

    // Fonte em negrito
    fontWeight: "700",

    // Cor preta
    color: "#111",

    // Espaço abaixo
    marginBottom: 8,
  },


  // Linha que contém preço e estoque
  priceRow: {

    // Elementos lado a lado
    flexDirection: "row",

    // Um elemento em cada lado
    justifyContent: "space-between",

    // Alinha verticalmente
    alignItems: "center",
  },


  // Estilo do preço
  price: {

    // Tamanho médio
    fontSize: 18,

    // Negrito
    fontWeight: "bold",

    // Cor preta
    color: "#000",
  },


  // Estilo da quantidade em estoque
  quantity: {

    // Fonte menor
    fontSize: 13,

    // Cor cinza
    color: "#666",
  }

});