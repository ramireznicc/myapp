import { View, TextInput, Button } from "react-native";

import { styles } from "./styles";

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
        selectionColor="#32a4a7"
        cursorColor="#282828"
        placeholderTextColor="#cecece"
        onFocus={handlerFocus}
        onBlur={handlerBlur}
        onChangeText={handlerChage}
        value={task}
      />
      <Button
        title="Add"
        disabled={task === ""}
        color="#32a4a7"
        onPress={handlerCreateTask}
      />
    </View>
  );
};

export default InputTask;
