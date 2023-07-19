import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { RoundedButton, TodoItem } from "../src/app/components";

describe("Testing components", () => {
  test("Test RoundedButton, matches snapshot", () => {
    const { toJSON } = render(
      <RoundedButton text="Submit" width={100} onPress={() => {}} />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test("Renders RoundedButton with correct text and width", () => {
    const { getByText, getByTestId } = render(
      <RoundedButton text="Submit" width={100} onPress={() => {}} />
    );
    const button = getByTestId("rounded-button");
    const buttonText = getByText("Submit");

    expect(button).toBeTruthy();
    expect(buttonText).toBeTruthy();
    expect(button.props.style).toHaveProperty("width", 100);
  });

  test("Testing TodoItem , renders the name text and handles remove button click", () => {
    const name = "Test Todo";
    const onTodoSelectMock = jest.fn();
    const onTodoDeleteMock = jest.fn();

    const { getByText, getByTestId } = render(
      <TodoItem
        name={name}
        onTodoSelect={onTodoSelectMock}
        onTodoDelete={onTodoDeleteMock}
      />
    );

    const nameText = getByText(name);
    expect(nameText).toBeDefined();

    const removeButton = getByTestId("remove-todo-button");
    fireEvent.press(removeButton);
    expect(onTodoDeleteMock).toHaveBeenCalledTimes(1);
  });
});
