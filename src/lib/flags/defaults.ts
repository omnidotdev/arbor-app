export interface FlagConfig {
  variants: Record<string, boolean | string | number>;
  defaultVariant: string;
}

export const defaultFlags: Record<string, FlagConfig> = {
  "arbor-maintenance": {
    variants: {
      on: true,
      off: false,
    },
    defaultVariant: "off",
  },
};

export const FLAGS = {
  MAINTENANCE: "arbor-maintenance",
} as const;
