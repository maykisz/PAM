import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },

  list: {
    paddingBottom: 20,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 16,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
    marginBottom: 4,
  },

  role: {
    fontSize: 14,
    color: "#666",
  },
});