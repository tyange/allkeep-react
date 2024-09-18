export const Size = {
  EXTRA_SMALL: "xs",
  SMALL: "sm",
  MEDIUM: "md",
  LARGE: "lg",
} as const;

export type Size = (typeof Size)[keyof typeof Size];
