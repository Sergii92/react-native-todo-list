import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const AppCard = (props) => {
  return <View style={styles.default}>{props.children}</View>;
};

const styles = StyleSheet.create({
  default: {
    marginBottom: 10,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    shadowRadius: 2,
    shadowOpacity: 0.4,
    shadowOffset: { width: 2, height: 2 },
    elevation: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});
