import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

const BaseButton = ({ title, color = "primary", navigation, targetScreen }) => {
  const handle = () => {
    if (targetScreen) {
      navigation.navigate(targetScreen);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={handle}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 25,
    marginVertical: 5,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default BaseButton;
