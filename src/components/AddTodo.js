import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";
import { THEME } from "../THEME";
import { AppButton } from "./ui/AppButton";

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

      <AppButton onPress={pressHandler}>
        <Feather name="file-plus" size={20} color="#fff" />
      </AppButton>
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
