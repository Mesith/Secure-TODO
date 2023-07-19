import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import useAuthContext from "../hooks/UseAuthContext";
import { RoundedButton } from "../components";

const AuthScreen = () => {
  const { isLocalAuthSupport, authenticate } = useAuthContext();

  return (
    <View style={styles.container} testID="auth-screen">
      {/* showing user to device support status of Local Auth  */}
      {isLocalAuthSupport ? (
        <Text style={styles.message}>Set Up Authentication to Proceed</Text>
      ) : (
        <Text style={styles.message}>
          Local Authentication does not support
        </Text>
      )}
      <RoundedButton text="Go to Settings" width={140} onPress={authenticate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 44,
  },
  message: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
});

export default AuthScreen;
