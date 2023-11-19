import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Title({ children }) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "nunito-extra-bold",
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    // borderWidth: 2,
    // borderColor: "white",
    padding: 12,
    maxWidth: "80%",
  },
});
