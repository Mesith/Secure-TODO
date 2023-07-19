import {
  render,
  waitFor,
  fireEvent,
} from "@testing-library/react-native";
import { AuthContext } from "../src/app/context/AuthContext";
import { authenticateAsync } from "expo-local-authentication";
import AuthScreen from "../src/app/screens/AuthScreen";
import React from "react";

jest.mock("expo-local-authentication", () => ({
  authenticateAsync: jest.fn(),
}));

jest.mock("expo-intent-launcher", () => ({
  startActivityAsync: jest.fn(),
}));

describe("AuthContext", () => {
  test('should call the authenticate function when "Go to Settings" is pressed', async () => {
    const authenticateMock = jest.fn();
    authenticateAsync.mockResolvedValue({ success: true });
    const { getByText } = render(
      <AuthContext.Provider
        value={{
          isAuthenticated: false,
          isLocalAuthSupport: true,
          authenticate: authenticateMock,
        }}
      >
        <AuthScreen />
      </AuthContext.Provider>
    );

    fireEvent.press(getByText("Go to Settings"));

    await waitFor(() => {
      expect(authenticateMock).toHaveBeenCalled();
    });
  });
});
