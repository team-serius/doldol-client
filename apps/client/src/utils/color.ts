import { ColorPalette } from "@ui/theme";

export const getColorFromString = (str: string): string => {
  const availableColors = [
    ColorPalette["primary-brand"],
    ColorPalette["green-1"],
    ColorPalette["purple-1"],
    ColorPalette["red-1"],
    ColorPalette["yellow-1"],
  ];

  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash % availableColors.length);

  return availableColors[index];
};
