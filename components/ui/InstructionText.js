import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

export default function InstructionText({ children, style }) {
  return (
    <View>
      <Text style={[styles.instructionText, style]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "nunito-light",
    color: "white",
    fontSize: 24,
  },
});
