export function getTextColor(bg: string): string {
  // 여기에 포함 되어있으면
  const darkColors = [
    "red-1",
    "green-1",
    "primary-dark-1",
    "primary-dark-2",
    "black",
    "gray-1",
    "gray-2",
    "primary-brand",
  ];
  return darkColors.includes(bg) ? "text-white" : "text-black";
}

export function getBgColorClass(bg: string): string {
  return (
    {
      "primary-brand": "bg-primary-brand",
      "primary-light1": "bg-primary-light1",
      "primary-dark1": "bg-primary-dark1",
      "primary-dark2": "bg-primary-dark2",
      "green-1": "bg-green-1",
      "purple-1": "bg-purple-1",
      "red-1": "bg-red-1",
      "yellow-1": "bg-yellow-1",
      black: "bg-black",
      "gray-1": "bg-gray-1",
      "gray-2": "bg-gray-2",
      "gray-3": "bg-gray-3",
      "gray-4": "bg-gray-4",
      "gray-5": "bg-gray-5",
      white: "bg-white",
      green: "bg-green-400",
      purple: "bg-purple-400",
      yellow: "bg-yellow-300",
    }[bg] || "bg-gray-200"
  );
}
