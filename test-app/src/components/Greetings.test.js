import Greetings from "./Greetings";
import { render, screen } from "@testing-library/react";

test("renders This is How as a text", () => {
  // Arrange
  render(<Greetings />);

  // Act
  //   ... nothing

  // Assert
  const helloWorldElement = screen.getByText("Hello World");
  expect(helloWorldElement).toBeInTheDocument;
});
