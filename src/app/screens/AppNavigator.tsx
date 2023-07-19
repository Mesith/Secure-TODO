import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useAuthContext from "../hooks/UseAuthContext";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();

/* Main Navigation, where the authentication screen is displayed until the authentication 
status is updated, and once authenticated, the user will navigate to the Home screen,  */

export const AppNavigator = () => {
  const { isAuthenticated } = useAuthContext();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!isAuthenticated ? (
          <Stack.Screen name="Auth" component={AuthScreen} />
        ) : (
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
