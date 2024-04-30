import App from "./App";
import { render, screen } from "@testing-library/react";

describe("app", () => {
  it("renders", () => {
    render(<App />);

    const element = screen.getByRole("heading", { name: /SimplexSoftware/i });

    expect(element).toBeInTheDocument();
  });

  it("works with jest extended", () => {
    expect(true).toBeTrue();
  });
});
