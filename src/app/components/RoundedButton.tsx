import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type RounderedButtonProps = {
  text: string;
  width: number;
  onPress: () => void;
};
// eslint-disable-next-line react/display-name
const RoundedButton = React.memo(
  ({ text, width, onPress }: RounderedButtonProps) => {
    return (
      <TouchableOpacity
        testID="rounded-button"
        style={{ width, ...styles.button }}
        onPress={onPress}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: "#053095",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  text: {
    textAlign: "center",
    color: "#FFFFFF",
  },
});

export default RoundedButton;
