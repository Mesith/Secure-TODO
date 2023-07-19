import React from "react";
import renderer from "react-test-renderer";
import App from "../App";

describe("Render <App /> component correctly", () => {
  test("Renders App without errors", () => {
    expect(() => {
      renderer.create(<App />);
    }).not.toThrow();
  });

  test("Renders App correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
