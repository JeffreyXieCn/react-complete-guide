import Greeting from "./Greetings";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greetings", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWordElement = screen.getByText("Hello World", { exact: false });
    expect(helloWordElement).toBeInTheDocument();
  });

  test('renders "It\'s good to see you" when the button is NOT clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const greetingElement = screen.getByText("It's good to see you", {
      exact: false,
    });
    expect(greetingElement).toBeInTheDocument();
  });

  test('renders "Changed!" when the button is clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const textElement = screen.getByText("Changed!");
    expect(textElement).toBeInTheDocument();
  });

  test('does not renders "It\'s good to see you" when the button is clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const greetingElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(greetingElement).toBeNull();
  });
});
