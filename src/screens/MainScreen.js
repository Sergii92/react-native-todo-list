import React from "react";
import { StyleSheet, View, FlatList, Image, Text } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";

export const MainScreen = ({ removeTodo, addTodo, todos, openTodo }) => {
  let content = (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Todo todo={item} removeTodo={removeTodo} onOpen={openTodo} />
      )}
    />
  );

  if (todos.length === 0) {
    content = (
      <View style={styles.imgWrap}>
        <Image
          source={require("../../assets/no_items.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    );
  }

  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  imgWrap: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 400,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
