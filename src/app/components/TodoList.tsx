import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { Todo } from "../context/DBContext";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  handleTodoSelect: (item: Todo) => void;
  handleTodoDelete: (item: Todo) => void;
};

// eslint-disable-next-line react/display-name
const TodoList = React.memo(
  ({ todos, handleTodoSelect, handleTodoDelete }: TodoListProps) => {
    return (
      <FlatList
        data={todos}
        renderItem={({ item }: { item: Todo }) => (
          <TodoItem
            name={item?.name}
            onTodoSelect={() => handleTodoSelect(item)}
            onTodoDelete={() => handleTodoDelete(item)}
          />
        )}
        keyExtractor={(item: Todo) => item.id.toString()}
        style={styles.listStyle}
      />
    );
  }
);

const styles = StyleSheet.create({
  listStyle: {
    width: "95%",
    marginBottom: 16,
    marginTop: 16,
  },
});

export default TodoList;
