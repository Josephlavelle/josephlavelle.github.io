export interface ColorScheme {
  name: string;
  accent: string;
  accentRgb: string; // RGB values for use with rgba()
  accentSecondary: string;
  accentSecondaryRgb: string;
}

export const colorSchemes: Record<string, ColorScheme> = {
  bluePink: {
    name: "Blue & Pink",
    accent: "#3b82f6",
    accentRgb: "59, 130, 246",
    accentSecondary: "#ec4899",
    accentSecondaryRgb: "236, 72, 153",
  },
  emeraldGold: {
    name: "Emerald & Gold",
    accent: "#10b981",
    accentRgb: "16, 185, 129",
    accentSecondary: "#f59e0b",
    accentSecondaryRgb: "245, 158, 11",
  },
  purpleCyan: {
    name: "Purple & Cyan",
    accent: "#8b5cf6",
    accentRgb: "139, 92, 246",
    accentSecondary: "#06b6d4",
    accentSecondaryRgb: "6, 182, 212",
  },
  orangeTeal: {
    name: "Orange & Teal",
    accent: "#f97316",
    accentRgb: "249, 115, 22",
    accentSecondary: "#14b8a6",
    accentSecondaryRgb: "20, 184, 166",
  },
  roseIndigo: {
    name: "Rose & Indigo",
    accent: "#f43f5e",
    accentRgb: "244, 63, 94",
    accentSecondary: "#6366f1",
    accentSecondaryRgb: "99, 102, 241",
  },
  limePurple: {
    name: "Lime & Purple",
    accent: "#84cc16",
    accentRgb: "132, 204, 22",
    accentSecondary: "#a855f7",
    accentSecondaryRgb: "168, 85, 247",
  },
  monochromeBlue: {
    name: "Monochrome Blue",
    accent: "#60a5fa",
    accentRgb: "96, 165, 250",
    accentSecondary: "#3b82f6",
    accentSecondaryRgb: "59, 130, 246",
  },
  warmNeutrals: {
    name: "Warm Neutrals",
    accent: "#d97706",
    accentRgb: "217, 119, 6",
    accentSecondary: "#78716c",
    accentSecondaryRgb: "120, 113, 108",
  },
};

// ======================================
// Change this line to switch themes
// ======================================
export const activeTheme: ColorScheme = colorSchemes.monochromeBlue
