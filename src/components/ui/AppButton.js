import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { THEME } from "../../THEME";

export const AppButton = ({ children, onPress, color = THEME.MAIN_COLOR }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <View style={{ ...styles.button, backgroundColor: color }}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
