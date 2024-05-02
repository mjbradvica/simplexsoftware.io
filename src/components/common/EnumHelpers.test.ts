import { expandToStorybookArgument } from "./EnumHelpers";

describe("enumHelpers", () => {
  it("destructure object correctly", () => {
    enum MyEnum {
      First = 1,
      Second = 2,
    }

    const result = expandToStorybookArgument(MyEnum);

    expect(result.options).toStrictEqual([1, 2]);
    expect(result.control.labels).toStrictEqual(["First", "Second"]);
  });
});
