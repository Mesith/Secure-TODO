import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { AddOrUpdateTodoView } from "../components";
import useDBContext from "../hooks/UseDBContext";
import TodoList from "../components/TodoList";

const HomeScreen = () => {
  const { todos, setCurrentTodoItem, deleteTodo } = useDBContext();

  return (
    <View style={styles.container} testID="home-screen">
      <Text style={styles.header}>TODO:</Text>
      <TodoList
        todos={todos}
        handleTodoDelete={deleteTodo}
        handleTodoSelect={setCurrentTodoItem}
      />
      <AddOrUpdateTodoView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 24,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  listStyle: {
    width: "95%",
    marginBottom: 16,
    marginTop: 16,
  },
  header: {
    fontSize: 22,
    marginBottom: 10,
    textAlign: "left",
    width: "100%",
    padding: 8,
    color: "#053095",
    fontWeight: "900",
    paddingTop: Platform.OS === "ios" ? 44 : 8,
  },
});

export default HomeScreen;
