import { Typography } from "@ui/components";
import cx from "clsx";

interface Props {
  menuItems: string[];
  activeItem: string;
  onItemClick: (item: string) => void;
  className?: string;
}

export const TabMenu: React.FC<Props> = ({
  menuItems,
  activeItem,
  onItemClick,
  className,
}) => {
  return (
    <div className={cx("flex items-center w-full h-9 bg-white", className)}>
      {menuItems.map((item) => (
        <button
          key={item}
          className={`flex-1 h-full text-center ${activeItem === item && "border-b-2 border"}`}
          onClick={() => onItemClick(item)}
        >
          <Typography
            variant={"b14-medium"}
            color={activeItem === item ? "black" : "gray-2"}
          >
            {item}
          </Typography>
          {item}
        </button>
      ))}
    </div>
  );
};
