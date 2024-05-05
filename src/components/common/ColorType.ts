export enum ColorType {
  Primary,
  Secondary,
  Tertiary,
}

export function determineColorType(colorType: ColorType): string {
  switch (colorType) {
    case ColorType.Primary: {
      return "primary";
    }
    case ColorType.Secondary: {
      return "secondary";
    }
    case ColorType.Tertiary: {
      return "tertiary";
    }
    default: {
      return "primary";
    }
  }
}
