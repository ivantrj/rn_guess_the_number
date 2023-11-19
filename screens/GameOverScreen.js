import { View, StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";

export default function GameOverScreen({
  userNumber,
  roundsNumber,
  onStartNewGame,
}) {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over!</Title>
        <Ionicons name="checkmark" size={250} color="white" />

        {/* <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View> */}
        <View>
          <Text style={styles.summaryText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
            the number <Text style={styles.highlight}>{userNumber}</Text>.
          </Text>
          <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  summaryText: {
    fontFamily: "nunito-light",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
    color: "white",
  },
  highlight: {
    fontFamily: "nunito-extra-bold",
    color: "white",
  },
});
