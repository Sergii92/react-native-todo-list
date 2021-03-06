import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { THEME } from "../THEME";

export const Todo = ({ todo, removeTodo, onOpen }) => {
  const longPressHandler = () => {
    removeTodo(todo.id);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onLongPress={longPressHandler}
      onPress={() => onOpen(todo.id)}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
});
