import { render, screen } from "@testing-library/react";
import { Container } from "./Container";

describe("container", () => {
  it("renders correctly", () => {
    const content = "content";

    render(
      <Container>
        <p>{content}</p>
      </Container>,
    );

    const element = screen.getByText(content);

    expect(element).toBeInTheDocument();
  });

  it("has correct class", () => {
    const content = "content";

    render(<Container>{content}</Container>);

    const element = screen.getByText(content);

    expect(element).toHaveClass("container");
  });
});
