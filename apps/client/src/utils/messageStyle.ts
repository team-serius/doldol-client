// utils/messageStyle.ts
export function getTextColor(bg: string): string {
  const darkColors = ["primary-brand", "purple"];
  return darkColors.includes(bg) ? "text-white" : "text-black";
}

export function getBgColorClass(bg: string): string {
  return (
    {
      "primary-brand": "bg-primary-brand",
      green: "bg-green-400",
      purple: "bg-purple-400",
      yellow: "bg-yellow-300",
    }[bg] || "bg-gray-200"
  );
}
