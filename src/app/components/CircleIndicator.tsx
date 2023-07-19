import React from "react";
import { View, StyleSheet } from "react-native";

const CircleIndicator = () => {
  return <View style={styles.circleIndicator} />;
};

const styles = StyleSheet.create({
  circleIndicator: {
    height: 24,
    width: 24,
    borderRadius: 24 / 2,
    marginHorizontal: 8,
    backgroundColor: "#053095",
  },
});

export default CircleIndicator;
