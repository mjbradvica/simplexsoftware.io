import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import TitleElement from "./TitleElement.vue";
import { TitleType } from "./TitleType";

describe("title", () => {
  it("heading one is correct", () => {
    render(TitleElement, {
      props: {
        type: TitleType.One,
        content: "title",
      },
    });

    expect(screen.getByRole("heading", { name: /title/i })).toHaveClass(
      "title",
    );
  });

  it("heading two is correct", () => {
    render(TitleElement, {
      props: {
        type: TitleType.Two,
        content: "title",
      },
    });

    expect(screen.getByRole("heading", { name: /title/i })).toHaveClass(
      "title",
      "is-4",
    );
  });

  it("heading three is correct", () => {
    render(TitleElement, {
      props: {
        type: TitleType.Three,
        content: "title",
      },
    });

    expect(screen.getByRole("heading", { name: /title/i })).toHaveClass(
      "title",
      "is-5",
    );
  });
});
