import { render, screen } from "@testing-library/react";
import { TitleType, Title } from "../index";

describe("title", () => {
  it("one works correctly", () => {
    const content = "title";

    render(<Title content={content} type={TitleType.One} />);

    const element = screen.getByRole("heading", { name: content });

    expect(element).toHaveClass("title");
    expect(element).toHaveClass("is-1");
  });

  it("two works correctly", () => {
    const content = "title";

    render(<Title content={content} type={TitleType.Two} />);

    const element = screen.getByRole("heading", { name: content });

    expect(element).toHaveClass("title");
    expect(element).toHaveClass("is-2");
  });

  it("no value works correctly", () => {
    const content = "title";

    render(<Title content={content} type={999 as TitleType} />);

    const element = screen.queryByRole("heading", { name: content });

    expect(element).toHaveClass("title");
    expect(element).toHaveClass("is-6");
  });
});
