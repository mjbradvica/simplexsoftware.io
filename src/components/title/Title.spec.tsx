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
});
