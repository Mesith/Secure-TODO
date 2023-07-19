import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppNavigator } from "./src/app/screens/AppNavigator";
import { AuthContextProvider, DBContextProvider } from "./src/app/context";

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthContextProvider>
        <DBContextProvider>
          <AppNavigator />
        </DBContextProvider>
      </AuthContextProvider>
    </SafeAreaProvider>
  );
}
