import { StyleSheet } from "react-native";

import { COLORS } from "../../theme";

export const styles = StyleSheet.create({
  taskCard: {
    padding: 10,
    borderRadius: 8,
    borderColor: COLORS.disabled,
    borderWidth: 0.5,
    shadowColor: COLORS.black,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskText: {
    fontWeight: "bold",
    fontSize: 18,
    color: COLORS.primary,
  },
  done: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 11,
    borderRadius: 8,
    borderColor: COLORS.disabled,
    borderWidth: 0.5,
    opacity: 0.9,
  },
  doneText: {
    color: COLORS.primary,
  },
});
