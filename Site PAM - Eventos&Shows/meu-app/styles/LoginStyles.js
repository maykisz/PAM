import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  titleBem: {
     fontSize: 28, 
     fontWeight: "700", 
     marginBottom: 20, 
     textAlign: "center" 
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 30,
    letterSpacing: 1,
  },

  input: {
    width: "100%",
    height: 55,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: "#000000",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#302e2e",
  },

  button: {
    width: "100%",
    height: 55,
    backgroundColor: "#3b82f6",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,

    shadowColor: "#3b82f6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 8,

    elevation: 6,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1,
  },

  userAndPassoword: {
    fontWeight: "semibold",
    marginTop: 15,
    textAlign: "center",
  },

  errorText: {
    color: "#ef4444",
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "600",
  },
});