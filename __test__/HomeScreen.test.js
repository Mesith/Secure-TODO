import { AppNavigator } from "../src/app/screens/AppNavigator"; 
import { AuthContext } from "../src/app/context/AuthContext";
import { render, screen } from "@testing-library/react-native";
import React from "react";
import { DBContext } from "../src/app/context/DBContext";

describe("HomeScreen Test", () => {
  test("displays the todo list, when user authenticate and has todos saved", () => {
    const mockTodos = [
      { id: 1, name: "Todo 1" },
      { id: 2, name: "Todo 2" },
    ];

    render(
      <AuthContext.Provider value={{ isAuthenticated: true }}>
        <DBContext.Provider value={{ todos: mockTodos }}>
          <AppNavigator />
        </DBContext.Provider>
      </AuthContext.Provider>
    );

    // Expect the todo list items to be rendered
    for (const todo of mockTodos) {
      const todoElement = screen.getByText(todo.name);
      expect(todoElement).toBeTruthy();
    }
  });
});
