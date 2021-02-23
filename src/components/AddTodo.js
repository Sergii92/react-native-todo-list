import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { THEME } from "../THEME";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      Alert.alert("Please,enter todo");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Enter todo"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button title="Add Todo" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "70%",
    borderBottomColor: THEME.MAIN_COLOR,
    borderStyle: "solid",
    borderBottomWidth: 1,
    padding: 10,
  },
  button: {
    width: "20%",
  },
});
