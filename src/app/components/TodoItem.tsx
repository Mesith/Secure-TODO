import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import CircleIndicator from "./CircleIndicator";

type TodoListItemProps = {
  name: string;
  onTodoSelect: () => void;
  onTodoDelete: () => void;
};

const TodoItem = ({ name, onTodoSelect, onTodoDelete }: TodoListItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onTodoSelect}>
      <View style={styles.nameContainer}>
        <CircleIndicator />
        <Text>{name}</Text>
      </View>
      <TouchableWithoutFeedback testID="remove-todo-button">
        <TouchableOpacity style={styles.removeButton} onPress={onTodoDelete}>
          <Text style={styles.removeButtonText}>REMOVE</Text>
        </TouchableOpacity>
      </TouchableWithoutFeedback>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 64,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    borderRadius: 20,
  },
  nameContainer: {
    height: 64,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "#FFFFFF",
  },
  removeButton: {
    marginRight: 10,
  },
  removeButtonText: {
    color: "#757474",
  },
});

export default TodoItem;
