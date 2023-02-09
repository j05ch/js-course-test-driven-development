import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

const INITIAL_COUNTER_VALUE = 0;

describe("App", () => {
  it("shows header", () => {
    render(<App />);
    const header = screen.getByRole("heading", { name: /counter/i });
    expect(header).toBeInTheDocument();
  });

  it("shows button", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /increment/i });
    expect(button).toBeInTheDocument();
  });

  it("shows div for current counter value", () => {
    render(<App />);
    const div = screen.getByTestId("counter-value");
    expect(div).toBeInTheDocument();
  });

  it("shows initial counter value", () => {
    render(<App />);
    const initialCounterValue = screen.getByText(
      INITIAL_COUNTER_VALUE.toString()
    );
    expect(initialCounterValue).toBeInTheDocument();
  });

  it("increments counter value on click", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /increment/i });
    fireEvent.click(button);
    const incrementedCounterValue = screen.getByText(
      (INITIAL_COUNTER_VALUE + 1).toString()
    );
    expect(incrementedCounterValue).toBeInTheDocument();
  });
});
