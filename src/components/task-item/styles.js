import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: "#32a4a7",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
    elevation: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#282828",
  },
  done: {
    color: "#282828",
    backgroundColor: "white",
    paddingHorizontal: 11,
    borderRadius: 8,
    opacity: 0.9,
  },
  doneText: {
    color: "#32a4a7",
  },
});
