import {
  renderHook,
  act,
} from "@testing-library/react-native";
import { DBContextProvider } from "../src/app/context/DBContext";
import useDBContext from "../src/app/hooks/UseDBContext";

jest.mock("expo-sqlite", () => ({
  openDatabase: () => ({
    transaction: (callback) => {
      // Simulate successful insert with a slight delay
      setTimeout(() => {
        callback({
          executeSql: (query, params, successCallback) => {
          }
        });
      }, 10);
    }
  })
}));

describe("set Current Todo", () => {
  test("should add a new todo item to the database", () => {
    const title = "New Todo";

    const { result } = renderHook(() => useDBContext(), {
      wrapper: DBContextProvider,
    });

    act(() => {
      result.current.setCurrentTodoItem({ id: 1, name: title });
    });

    return new Promise((resolve) => setTimeout(resolve, 0)).then(() => {
      expect(result.current.currentTodoItem.name).toBe(title);
    });
  });
});
