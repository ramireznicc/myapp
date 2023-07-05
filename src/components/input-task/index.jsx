import { View, TextInput, Button } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../theme";

const InputTask = ({
  borderColor,
  handlerFocus,
  handlerBlur,
  handlerChage,
  task,
  handlerCreateTask,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, { borderColor }]}
        placeholder="add task"
        autoCapitalize="none"
        autoCorrect={false}
        selectionColor={COLORS.primary}
        cursorColor={COLORS.grey}
        placeholderTextColor={COLORS.disabled}
        onFocus={handlerFocus}
        onBlur={handlerBlur}
        onChangeText={handlerChage}
        value={task}
      />
      <Button
        title="Add"
        disabled={task === ""}
        color={COLORS.primary}
        onPress={handlerCreateTask}
      />
    </View>
  );
};

export default InputTask;
