import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingTop: 20,
  },

  gridRow: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 12,
  },

  eventCard: {
    flex: 1,
    marginHorizontal: 6,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },

  imageBadgeContainer: {
    position: "relative",
    width: "100%",
    height: 160,
  },

  eventImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  dateBadge: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "#000000",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: "center",

    // Glow effect
    shadowColor: "#707070",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10,

    elevation: 10,
  },

  dateMonth: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: 1,
  },

  dateDay: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
  },

  eventInfo: {
    padding: 12,
  },

  eventTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#111",
    marginBottom: 6,
    lineHeight: 16,
  },

  locationRow: {
    marginBottom: 6,
  },

  locationText: {
    fontSize: 11,
    color: "#666",
    fontWeight: "600",
  },

  cityText: {
    fontSize: 10,
    color: "#999",
    marginTop: 2,
  },

  organizerText: {
    fontSize: 10,
    color: "#0066FF",
    fontWeight: "600",
  },

  loginContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#F2F2F2",
  },

  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#FFF",
  },

  button: {
    backgroundColor: "#000",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },

  errorText: {
    color: "#D00",
    marginBottom: 12,
    textAlign: "center",
  },

  homeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 10,
  },

  homeButton: {
    flex: 1,
    backgroundColor: "#3b82f6",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginHorizontal: 6,

    shadowColor: "#3b82f6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },

  homeButtonText: {
    color: "#FFF",
    fontWeight: "700",
  },
});