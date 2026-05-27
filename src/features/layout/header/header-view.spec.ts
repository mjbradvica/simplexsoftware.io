import { describe, it, expect } from "vitest";
import HeaderView from "./HeaderView.vue";
import { render, screen } from "@testing-library/vue";
import { userEvent } from "@testing-library/user-event";
import { RouterLinkStub } from "@vue/test-utils";

describe("header view", () => {
  it("site search button is hidden by default", () => {
    render(HeaderView, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    expect(
      screen.queryByRole("button", { name: /search/i }),
    ).not.toBeInTheDocument();
  });

  it("shows search button with search terms", async () => {
    const user = userEvent.setup();

    render(HeaderView, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    await user.click(await screen.findByPlaceholderText(/site search/i));

    await user.keyboard("terms");

    expect(
      await screen.findByRole("button", { name: /search/i }),
    ).toBeInTheDocument();
  });
});
