import { useState } from "react";
import { View, SafeAreaView, StatusBar, Modal, StyleSheet } from "react-native";

import {
  InputTask,
  TaskItem,
  TaskList,
  DeleteConfirm,
} from "./components/index";
import { COLORS } from "./theme";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [borderColor, setBorderColor] = useState("#cecece");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(true);

  const handlerFocus = () => {
    setBorderColor(COLORS.primary);
  };

  const handlerBlur = () => {
    setBorderColor(COLORS.disabled);
  };

  const handlerChage = (text) => {
    setTask(text);
  };

  const handlerCreateTask = () => {
    setTaskList([
      ...taskList,
      {
        id: Date.now().toString(),
        value: task,
        isDone: false,
        backgroundColor: COLORS.background,
      },
    ]);

    setTask("");
  };

  const handlerModal = (item) => {
    setIsVisible(true);
    setSelectedTask(item);
  };

  const handlerLongPress = (item) => {
    handlerModal(item);
  };

  const handlerPress = (item) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === item.id) {
          return { ...task, isDone: !task.isDone };
        } else {
          return task;
        }
      })
    );
  };

  const handlerCancel = () => {
    setIsVisible(false);
    setSelectedTask(null);
  };

  const handlerDelete = () => {
    setTaskList(taskList.filter((item) => item.id !== selectedTask.id));
    setIsVisible(false);
  };

  const renderItem = ({ item }) => (
    <TaskItem
      item={item}
      handlerLongPress={() => handlerLongPress(item)}
      handlerPress={() => handlerPress(item)}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <InputTask
          borderColor={borderColor}
          handlerFocus={handlerFocus}
          handlerBlur={handlerBlur}
          handlerChage={handlerChage}
          task={task}
          handlerCreateTask={handlerCreateTask}
        />
        <TaskList
          taskList={taskList}
          renderItem={renderItem}
          selectedTask={selectedTask}
        />
        <Modal transparent animationType="fade" visible={isVisible}>
          <DeleteConfirm
            selectedTask={selectedTask}
            handlerCancel={handlerCancel}
            handlerDelete={handlerDelete}
          />
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 20,
  },
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
