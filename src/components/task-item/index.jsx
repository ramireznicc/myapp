import { TouchableOpacity, Text, View } from "react-native";

import { styles } from "./styles";

const TaskItem = ({ item, handlerLongPress, handlerPress }) => {
  return (
    <TouchableOpacity
      style={[styles.taskCard, { backgroundColor: item.backgroundColor }]}
      onLongPress={handlerLongPress}
      onPress={handlerPress}
    >
      <Text style={styles.taskText}>{item.value}</Text>
      {item.isDone ? (
        <View style={styles.done}>
          <Text style={styles.doneText}>Done</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default TaskItem;
