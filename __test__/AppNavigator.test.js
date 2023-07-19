import { AppNavigator } from "../src/app/screens/AppNavigator";
import { AuthContext } from "../src/app/context/AuthContext";
import { render, screen } from "@testing-library/react-native";
import React from "react";

describe("AppNavigator Test", () => {
  test("Show Home Screen, When user authenticated", () => {
    render(
      <AuthContext.Provider value={{ isAuthenticated: true }}>
        <AppNavigator />
      </AuthContext.Provider>
    );
    const homeScreen = screen.getByTestId("home-screen");
    expect(homeScreen).toBeTruthy();
  });

  test("Show Auth Screen, When user not authenticated", () => {
    render(
      <AuthContext.Provider value={{ isAuthenticated: false }}>
        <AppNavigator />
      </AuthContext.Provider>
    );
    const homeScreen = screen.getByTestId("auth-screen");
    expect(homeScreen).toBeTruthy();
  });
});
