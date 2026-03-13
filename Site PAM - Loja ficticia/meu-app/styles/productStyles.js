
import { StyleSheet } from "react-native";


// Exporta os estilos para serem usados em outras telas
export const productStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  image: {
    width: "100%",
    height: 320,
    resizeMode: "cover",
  },

  image2: {
    width: "100%",
    position: "absolute",
    height: 320,
    resizeMode: "cover",
  },

  content: {
    padding: 20,
  },

  brand: {
    fontSize: 14,
    color: "#888",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 6,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 10,
  },


  price: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
    marginBottom: 20,
  },

  stock: {
    fontSize: 14,
    color: "#666",
    marginBottom: 25,
  },

  button: {
    backgroundColor: "#000",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  }

});