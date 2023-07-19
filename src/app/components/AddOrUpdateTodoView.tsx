import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import useDBContext from "../hooks/UseDBContext";
import RoundedButton from "./RoundedButton";

const AddOrUpdateTodoView = () => {
  const { currentTodoItem, addTodo, updateTodo } = useDBContext();
  const [name, setName] = useState("");
  const [id, setId] = useState<number | null>(null);

  useEffect(() => {
    if (currentTodoItem) {
      const { id, name } = currentTodoItem;
      setName(name);
      setId(id);
    } else {
      setName("");
      setId(null);
    }
  }, [currentTodoItem]);

  const handleSaveOrUpdate = useCallback(() => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      return;
    }

    if (id) {
      updateTodo({ id, name: trimmedName });
    } else {
      addTodo(trimmedName);
    }

    setName("");
    setId(null);
  }, [name, id, addTodo, updateTodo]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter here"
      />
      <RoundedButton
        width={80}
        text={id ? "Update" : "Add"}
        onPress={handleSaveOrUpdate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    width: "94%",
    height: 64,
    padding: 8,
    borderRadius: 16,
  },
  input: {
    flex: 1,
    height: 44,
    paddingHorizontal: 8,
    textAlign: "left",
    marginRight: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#efefef",
  },
});

export default AddOrUpdateTodoView;
