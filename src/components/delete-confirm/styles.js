import { StyleSheet } from "react-native";

import { COLORS } from "../../theme";

export const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "rgba(0,0,0,0.2)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalCont: {
    gap: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
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
