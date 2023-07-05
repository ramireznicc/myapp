import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "rgba(0,0,0,0.2)",
    flex: 1,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  modalCont: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 22,
    borderRadius: 8,
  },
  modalQuestion: {
    fontSize: 18,
  },
  modalTask: {
    fontWeight: "bold",
    fontSize: 22,
  },
  modalButtons: {
    flexDirection: "row",
    gap: 10,
  },
});
