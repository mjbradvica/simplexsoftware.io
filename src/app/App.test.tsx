import App from "./App";
import { renderInMemoryBrowser } from "../infrastructure";

describe("app", () => {
  it("renders", () => {
    renderInMemoryBrowser(<App />);
  });
});
