import { ColorType, determineColorType } from "./ColorType";

describe("colorType", () => {
  it("defaults to primary", () => {
    const result = determineColorType(999 as ColorType);

    expect(result).toBe("primary");
  });

  it("primary is correct", () => {
    const result = determineColorType(ColorType.Primary);

    expect(result).toBe("primary");
  });

  it("secondary is correct", () => {
    const result = determineColorType(ColorType.Secondary);

    expect(result).toBe("secondary");
  });

  it("tertiary is correct", () => {
    const result = determineColorType(ColorType.Tertiary);

    expect(result).toBe("tertiary");
  });
});
