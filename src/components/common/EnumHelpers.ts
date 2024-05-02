export function expandToStorybookArgument<TEnum extends object>(
  enumeration: TEnum,
): StoryBookEnumArgument {
  return {
    options: Object.values(enumeration).filter(
      (value) => typeof value === "number",
    ) as Array<number>,
    control: {
      type: "select",
      labels: Object.values(enumeration).filter(
        (value) => typeof value === "string",
      ) as Array<string>,
    },
  };
}

export interface StoryBookEnumArgument {
  options: Array<number>;
  control: {
    type: "select";
    labels: Array<string>;
  };
}
