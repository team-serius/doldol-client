import { Message } from "@/types/message";
import { getTextColor } from "@/utils/messageStyle";
import { Typography } from "@ui/components";
import cx from "clsx";

interface Props {
  data: Message;
  isBlurred?: boolean;
  isOdd: boolean;
}

export const MessageCard: React.FC<Props> = ({ data, isBlurred, isOdd }) => {
  return (
    <article
      className={cx(
        "w-28 h-36 p-2 rounded-lg shadow-xl grid grid-rows-5",
        data.backgroundColor,
        getTextColor(data.backgroundColor),
        data.fontStyle,
        isOdd ? "-rotate-3" : "rotate-3",
        isBlurred && "blur-sm",
      )}
    >
      <p
        className={cx(
          "whitespace-pre-line mb-4 text-sm leading-relaxed row-span-4 truncate",
        )}
      >
        {isBlurred
          ? "아직은 메시지를 볼 수 없다 돌돌! 메시지가 오픈될 때까지 조금만 기다려달라 돌돌!"
          : data.content}
      </p>
      <Typography element="footer" variant={"b12-bold"}>
        To. {data.name}
      </Typography>
    </article>
  );
};
