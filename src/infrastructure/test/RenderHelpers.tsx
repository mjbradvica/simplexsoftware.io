import { RenderResult, render } from "@testing-library/react";
import { ReactNode } from "react";
import { MemoryRouter } from "react-router";

export function wrapInMemoryBrowser(children: ReactNode): React.JSX.Element {
  return <MemoryRouter>{children}</MemoryRouter>;
}

export function renderInMemoryBrowser(children: ReactNode): RenderResult {
  return render(wrapInMemoryBrowser(children));
}
