import { render, screen } from "@testing-library/react";

jest.mock("./router/routes", () => () => <div data-testid="app-router" />);

import App from "./App";

test("renders app shell", () => {
  render(<App />);
  expect(screen.getByTestId("app-router")).toBeInTheDocument();
});
