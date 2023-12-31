import { FlatList } from "react-native";

import { styles } from "./styles";

const TaskList = ({ taskList, renderItem }) => {
  return (
    <FlatList
      alwaysBounceVertical
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatListContainer}
      data={taskList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TaskList;
