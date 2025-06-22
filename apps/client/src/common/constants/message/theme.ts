export type FontType = "font-pretendard" | "font-minguk" | "font-dahyun";

export const BG_COLORS = [
  "bg-white",
  "bg-gray-5",
  "bg-primary-light1",
  "bg-primary-dark1",
  "bg-primary-brand",
  "bg-red-1",
  "bg-yellow-1",
  "bg-purple-1",
  "bg-black",
] as const;

export type BgColor = (typeof BG_COLORS)[number];
