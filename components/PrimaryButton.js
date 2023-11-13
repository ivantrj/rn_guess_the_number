import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function PrimaryButton({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [pressed && { opacity: 0.7 }]}
      android_ripple={{ color: "#ddb52f" }}
      onPress={onPress}
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#ddb52f",
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    borderRadius: 28,
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
  },
  buttonText: {
    // color: "white",
    textAlign: "center",
  },
});
