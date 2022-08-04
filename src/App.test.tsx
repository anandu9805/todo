import { render, screen } from "@testing-library/react";
import App from "./App";
test("renders input box", () => {
  render(<App />);
  const getelement = screen.getByTitle("input_box");
  expect(getelement).toBeInTheDocument();
});
