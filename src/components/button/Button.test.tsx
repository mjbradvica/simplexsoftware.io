import { render, screen } from "@testing-library/react";
import { Button, ButtonType } from "../index";
import { userEvent } from "@testing-library/user-event";

describe("button", () => {
  it("has default type and attributes", () => {
    const content = "button";

    render(<Button content={content} onClick={vi.fn()} />);

    const element = screen.getByRole("button", { name: content });

    expect(element).toHaveAttribute("type", "button");
    expect(element).toHaveClass("button is-responsive");
  });

  it("projects content", () => {
    const content = "button";

    render(<Button content={content} onClick={vi.fn()} />);

    const element = screen.getByRole("button", { name: content });

    expect(element).toBeInTheDocument();
  });

  it("submit has correct button type", () => {
    const content = "button";

    render(
      <Button
        buttonType={ButtonType.Submit}
        content={content}
        onClick={vi.fn()}
      />,
    );

    const element = screen.getByRole("button", { name: content });

    expect(element).toHaveAttribute("type", "submit");
  });

  it("click calls handler correctly", async () => {
    expect.assertions(1);

    const user = userEvent.setup();

    const content = "button";

    const clickHandler = vi.fn();

    render(<Button content={content} onClick={clickHandler} />);

    const element = screen.getByRole("button", { name: content });

    await user.click(element);

    expect(clickHandler).toHaveBeenCalledOnce();
  });
});
