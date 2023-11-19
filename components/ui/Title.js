import { View, Text } from "react-native";
import React from "react";

export default function Title({ children }) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = {
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
  },
};
