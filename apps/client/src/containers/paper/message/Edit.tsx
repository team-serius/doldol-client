"use client";

import { BG_COLORS } from "@/common/constants/message/theme";
import { CreateMessageRequest } from "@/types/message";
import { ERROR_MESSAGES } from "@libs/utils/message";
import { Typography, Button } from "@ui/components";
import cx from "clsx";
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { getTextColor } from "@/utils/messageStyle";

interface Props {
  register: UseFormRegister<CreateMessageRequest>;
  setValue: UseFormSetValue<CreateMessageRequest>;
  watch: UseFormWatch<CreateMessageRequest>;
  onNext: () => void;
}

const MessageEditContainer: React.FC<Props> = ({
  register,
  setValue,
  watch,
  onNext,
}) => {
  return (
    <div className="space-y-4">
      <Typography element="h2" variant="b20-medium" className="mt-10">
        글씨체 선택
      </Typography>
      <div className="flex gap-2 mt-2">
        <Button
          variant={"outlined"}
          size={"small"}
          type="button"
          className="font-pretendard"
          isActive={watch("fontStyle") === "font-pretendard"}
          onClick={() => setValue("fontStyle", "font-pretendard")}
        >
          기본
        </Button>
        <Button
          variant={"outlined"}
          size={"small"}
          type="button"
          className="font-minguk"
          isActive={watch("fontStyle") === "font-minguk"}
          onClick={() => setValue("fontStyle", "font-minguk")}
        >
          손글씨
        </Button>
        <Button
          variant={"outlined"}
          size={"small"}
          type="button"
          className="font-dahyun"
          isActive={watch("fontStyle") === "font-dahyun"}
          onClick={() => setValue("fontStyle", "font-dahyun")}
        >
          동글동글
        </Button>
      </div>

      <Typography element="h2" variant="b20-medium" className="mt-10">
        배경색 선택
      </Typography>
      <div className="flex gap-2">
        {BG_COLORS.map((color) => (
          <button
            key={color}
            onClick={() => setValue("backgroundColor", color)}
            type="button"
            className={cx(
              "w-6 h-6 rounded-full border",
              color,
              watch("backgroundColor") === color
                ? "border-2"
                : "border-transparent",
            )}
          />
        ))}
      </div>

      {/* 카드 */}
      <div
        className={cx(
          "w-full p-8 rounded-xl shadow-xl",
          watch("backgroundColor"),
        )}
      >
        <textarea
          className={cx(
            "w-full h-80 resize-none text-center text-xl",
            watch("fontStyle"),
            watch("backgroundColor"),
            getTextColor(watch("backgroundColor")),
          )}
          placeholder="내용을 입력하세요..."
          {...register("content", {
            required: ERROR_MESSAGES.messageContentInvalid,
            validate: (value) => {
              if (value.length > 120) {
                return ERROR_MESSAGES.messageContentInvalid;
              }
            },
          })}
        />
        {/* From 입력 */}
        <div className="flex items-center gap-2">
          <Typography
            element="span"
            variant="b18-bold"
            className={getTextColor(watch("backgroundColor"))}
          >
            From.
          </Typography>
          <input
            className={cx(
              "border-b-2 border-gray-3 px-1 py-2 flex-1 text-[18px] font-bold",
              getTextColor(watch("backgroundColor")),
            )}
            placeholder="이름 입력"
            {...register("from", {
              required: "이름을 입력해주세요.",
              validate: (value) => {
                if (value.length > 10) {
                  return "이름은 최대 10자까지 입력할 수 있습니다.";
                }
              },
            })}
          />
        </div>
      </div>

      <Button
        type="button"
        variant={"secondary"}
        size={"large"}
        wide
        onClick={() => onNext()}
      >
        다음
      </Button>
    </div>
  );
};

export default MessageEditContainer;
