export function expandToStorybookArgument<TEnum extends object>(
  enumeration: TEnum,
): StoryBookEnumArgument {
  return {
    options: Object.values(enumeration).filter(
      (value) => !Number.isNaN(Number(value)),
    ) as Array<number>,
    control: {
      type: "select",
      labels: Object.values(enumeration).filter((value) =>
        Number.isNaN(Number(value)),
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
