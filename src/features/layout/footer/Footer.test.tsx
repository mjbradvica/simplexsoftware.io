import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("footer", () => {
  it("renders", () => {
    render(<Footer />);

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("has current year", () => {
    const currentYear = new Date().getUTCFullYear();

    render(<Footer />);

    expect(screen.getByText(currentYear, { exact: false })).toBeInTheDocument();
  });
});
