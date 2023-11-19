import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/colors";
import { BlurView } from "expo-blur";

export default function GuessLogItem({ roundNumber, guess }) {
  return (
    <BlurView style={styles.listItem} intensity={30}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 0.5,
    borderRadius: 16,
    borderColor: "lightgrey",
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    overflow: "hidden",
  },
  itemText: {
    fontFamily: "nunito-extra-bold",
    color: "white",
  },
});
