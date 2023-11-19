import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Colors from "../../constants/colors";
import { BlurView } from "expo-blur";

export default function Card({ children }) {
  return (
    <BlurView style={styles.inputContainer} intensity={30}>
      {children}
    </BlurView>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    // backgroundColor: Colors.primary800,
    borderWidth: 0.5,
    borderRadius: 16,
    borderColor: "lightgrey",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    elevation: 5,
    overflow: "hidden",
  },
});
