import { render, screen } from "@testing-library/react";
import { TitleType, Title } from "../index";

describe("title", () => {
  it("one works correctly", () => {
    const content = "title";

    render(<Title content={content} titleType={TitleType.One} />);

    const element = screen.getByRole("heading", { name: content, level: 1 });

    expect(element).toBeInTheDocument();
  });

  it("two works correctly", () => {
    const content = "title";

    render(<Title content={content} titleType={TitleType.Two} />);

    const element = screen.getByRole("heading", { name: content, level: 2 });

    expect(element).toBeInTheDocument();
  });

  it("three works correctly", () => {
    const content = "title";

    render(<Title content={content} titleType={TitleType.Three} />);

    const element = screen.getByRole("heading", { name: content, level: 3 });

    expect(element).toBeInTheDocument();
  });

  it("four works correctly", () => {
    const content = "title";

    render(<Title content={content} titleType={TitleType.Four} />);

    const element = screen.getByRole("heading", { name: content, level: 4 });

    expect(element).toBeInTheDocument();
  });

  it("five works correctly", () => {
    const content = "title";

    render(<Title content={content} titleType={TitleType.Five} />);

    const element = screen.getByRole("heading", { name: content, level: 5 });

    expect(element).toBeInTheDocument();
  });

  it("six works correctly", () => {
    const content = "title";

    render(<Title content={content} titleType={TitleType.Six} />);

    const element = screen.getByRole("heading", { name: content, level: 6 });

    expect(element).toBeInTheDocument();
  });

  it("no value works correctly", () => {
    const content = "title";

    render(<Title content={content} titleType={999 as TitleType} />);

    const element = screen.queryByRole("heading", { name: content, level: 6 });

    expect(element).toBeInTheDocument();
  });
});
