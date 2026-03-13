import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingTop: 20,
  },

  item: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 18,
    marginVertical: 12,
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 6,
  },

  image: {
    width: "100%",
    height: 190,
    resizeMode: "cover",
  },

  infoContainer: {
    padding: 16,
  },

  brand: {
    fontSize: 12,
    fontWeight: "600",
    color: "#8A8A8A",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 4,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    marginBottom: 8,
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },

  quantity: {
    fontSize: 13,
    color: "#666",
  }
});