import { CreateMessageRequest } from "@/types/message";
import { Button, Typography } from "@ui/components";
import { UseFormWatch } from "react-hook-form";
import cx from "clsx";
import Image from "next/image";
import { getRandomColor } from "@/utils/color";
import { getTextColor } from "@/utils/messageStyle";

interface Props {
  watch: UseFormWatch<CreateMessageRequest>;
  userName: string;
  onNext: () => void;
  isLoading: boolean;
}

const MessageCheckContainer: React.FC<Props> = ({
  watch,
  onNext,
  userName,
  isLoading,
}) => {
  return (
    <>
      <Typography element="h2" variant={"h24"} className="mt-10">
        새로운 메시지를
        <br />
        보낼게요!
      </Typography>
      <Typography element="h3" variant={"b20-medium"} className="mt-10">
        받는 사람
      </Typography>
      <div className="flex items-center gap-2 mt-4">
        <div
          className={cx(
            "flex items-center justify-center rounded-full p-1 w-8 h-8",
            getRandomColor(),
          )}
        >
          <Image
            src="/assets/logos/symbol-incase.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>
        <Typography element="span" variant="b18-medium">
          {userName}
        </Typography>
      </div>
      <Typography element="h3" variant={"b20-medium"} className="mt-10">
        작성한 메시지
      </Typography>
      <div
        className={cx(
          "w-full p-8 rounded-xl shadow-xl mt-4",
          watch("backgroundColor"),
        )}
      >
        <div
          className={cx(
            "w-full h-80 text-center text-xl whitespace-pre-line overflow-y-scroll",
            watch("fontStyle"),
            watch("backgroundColor"),
            getTextColor(watch("backgroundColor")),
          )}
        >
          {watch("content")}
        </div>
        <div className="flex items-center gap-2">
          <Typography
            element="div"
            variant="b18-bold"
            className={cx("flex gap-2", getTextColor(watch("backgroundColor")))}
          >
            <div className="p-2">From.</div>

            <div className="border-b-2 p-2 w-full block border-gray-3 max-w-60 truncate">
              {watch("from")}
            </div>
          </Typography>
        </div>
      </div>
      <Button
        type="button"
        variant={"secondary"}
        size={"large"}
        wide
        className="mt-10"
        onClick={() => onNext()}
        disabled={isLoading}
      >
        보내기
      </Button>
    </>
  );
};

export default MessageCheckContainer;
