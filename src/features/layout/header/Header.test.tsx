import { Header } from "./Header";
import { renderInMemoryBrowser } from "../../../infrastructure";

describe("header", () => {
  it("renders", () => {
    renderInMemoryBrowser(<Header />);
  });
});
