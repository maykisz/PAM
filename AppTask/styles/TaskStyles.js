import { StyleSheet } from "react-native";

export const TaskStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f2f5f9",
    padding: 20,
  },

  item: {
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 14,
    marginBottom: 16,

    borderLeftWidth: 5,
    borderLeftColor: "#000000",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 6,
  },

  title: {
    fontSize: 19,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 6,
  },

  description: {
    fontSize: 14,
    color: "#6b7280",
    lineHeight: 20,
  },

});