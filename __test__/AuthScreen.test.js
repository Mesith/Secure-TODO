import React from "react";
import { AppNavigator } from "../src/app/screens/AppNavigator";
import { AuthContext } from "../src/app/context/AuthContext";
import { render, screen, fireEvent } from "@testing-library/react-native";

describe("AuthScreen Test", () => {
  test("Show correct warning message, when device support local auth", () => {
    const mockText = "Set Up Authentication to Proceed";
    render(
      <AuthContext.Provider
        value={{ isAuthenticated: false, isLocalAuthSupport: true }}
      >
        <AppNavigator />
      </AuthContext.Provider>
    );
    const textElement = screen.getByText(mockText);
    expect(textElement).toBeTruthy();
  });

  test("Show correct warning message, When device does support local auth", () => {
    const mockText = "Local Authentication does not support";
    render(
      <AuthContext.Provider
        value={{ isAuthenticated: false, isLocalAuthSupport: false }}
      >
        <AppNavigator />
      </AuthContext.Provider>
    );
    const authScreen = screen.getByTestId("auth-screen");
    expect(authScreen).toBeTruthy();
    const textElement = screen.getByText(mockText);
    expect(textElement).toBeTruthy();
  });

  test("triggers authentication on button press", () => {
    const authenticateMock = jest.fn(); // Mock the authenticate function

    render(
      <AuthContext.Provider
        value={{ isAuthenticated: false, authenticate: authenticateMock }}
      >
        <AppNavigator />
      </AuthContext.Provider>
    );

    // Find the "Go to Settings" button and simulate a press event
    const settingsButton = screen.getByText("Go to Settings");
    fireEvent.press(settingsButton);

    // Expect the authenticate function to be called
    expect(authenticateMock).toHaveBeenCalled();
  });
});
