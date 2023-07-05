import { View, Text, Button } from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../theme";

const DeleteConfirm = ({ selectedTask, handlerCancel, handlerDelete }) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalCont}>
        <Text style={styles.modalQuestion}>
          Are you sure you want to delete this task?
        </Text>
        <Text style={styles.modalTask}>{selectedTask?.value}</Text>
        <View style={styles.modalButtons}>
          <Button
            color={COLORS.primary}
            title="Cancel"
            onPress={handlerCancel}
          />
          <Button color="red" title="Delete" onPress={handlerDelete} />
        </View>
      </View>
    </View>
  );
};

export default DeleteConfirm;
