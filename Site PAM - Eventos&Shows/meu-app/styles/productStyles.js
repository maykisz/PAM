import { StyleSheet } from "react-native";

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

  content: {
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 14,
  },

  location: {
    fontSize: 12,
    color: "#888",
    marginBottom: 14,
  },

  description: {
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
    marginBottom: 18,
  },

  price: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
    marginBottom: 20,
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
  },
});