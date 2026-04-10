import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: "center",
  },
  header: {
    marginBottom: 60,
  },
  brandText: {
    fontSize: 12,
    color: "#000",
    letterSpacing: 4, // Dá o ar de marca de luxo
    marginBottom: 12,
  },
  welcomeText: {
    fontSize: 22,
    color: "#666",
    lineHeight: 30,
    fontWeight: "300", // Tipografia leve, sem bold
  },
  form: {
    width: "100%",
  },
  inputContainer: {
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 8,
  },
  inputFocused: {
    borderBottomColor: "#000",
  },
  label: {
    fontSize: 10,
    color: "#AAA",
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    color: "#000",
    paddingVertical: 5,
    fontWeight: "300",
  },
  button: {
    backgroundColor: "#000",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    borderRadius: 2, // Quase quadrado, mais sério
  },
  buttonText: {
    color: "#FFF",
    fontSize: 14,
    letterSpacing: 1.5,
    fontWeight: "300",
  },
  footer: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  footerText: {
    fontSize: 10,
    color: "#CCC",
    letterSpacing: 1,
  },
});