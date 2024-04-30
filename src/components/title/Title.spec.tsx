import { render, screen } from "@testing-library/react";
import Title from "./Title";
import { TitleType } from "./TitleType";

describe("title", () => {
  it("one works correctly", () => {
    const content = "title";

    render(<Title type={TitleType.One} content={content} />);

    const element = screen.getByRole("heading", { name: content });

    expect(element).toHaveClass("title");
    expect(element).toHaveClass("is-1");
  });

  it("two works correctly", () => {
    const content = "title";

    render(<Title type={TitleType.Two} content={content} />);

    const element = screen.getByRole("heading", { name: content });

    expect(element).toHaveClass("title");
    expect(element).toHaveClass("is-2");
  });

  it("no value works correctly", () => {
    const content = "title";

    render(<Title type={999 as TitleType} content={content} />);

    const element = screen.queryByRole("heading", { name: content });

    expect(element).not.toBeInTheDocument();
  });
});
