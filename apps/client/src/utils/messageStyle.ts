export function getTextColor(bg: string): string {
  // 여기에 포함 되어있으면
  const darkColors = [
    "bg-red-1",
    "bg-green-1",
    "bg-primary-dark-1",
    "bg-primary-dark-2",
    "bg-black",
    "bg-gray-1",
    "bg-gray-2",
    "bg-primary-brand",
  ];
  return darkColors.includes(bg) ? "text-white" : "text-black";
}
