import { render, screen } from "@testing-library/react";
import { TitleType, Title } from "../index";

describe("title", () => {
  it("one works correctly", () => {
    const content = "title";

    render(<Title content={content} titleType={TitleType.One} />);

    const element = screen.getByRole("heading", { name: content, level: 1 });

    expect(element).toHaveClass("title");
    expect(element).toHaveClass("is-1");
  });

  it("two works correctly", () => {
    const content = "title";

    render(<Title content={content} titleType={TitleType.Two} />);

    const element = screen.getByRole("heading", { name: content, level: 2 });

    expect(element).toHaveClass("title");
    expect(element).toHaveClass("is-2");
  });

  it("three works correctly", () => {
    const content = "title";

    render(<Title content={content} titleType={TitleType.Three} />);

    const element = screen.getByRole("heading", { name: content, level: 3 });

    expect(element).toHaveClass("title");
    expect(element).toHaveClass("is-3");
  });

  it("no value works correctly", () => {
    const content = "title";

    render(<Title content={content} titleType={999 as TitleType} />);

    const element = screen.queryByRole("heading", { name: content, level: 6 });

    expect(element).toHaveClass("title");
    expect(element).toHaveClass("is-6");
  });
});
