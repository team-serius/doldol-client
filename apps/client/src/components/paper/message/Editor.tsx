"use client";

import { useState } from "react";
import cx from "clsx";
import { Button, Typography } from "@ui/components";

type FontType = "font-pretendard" | "font-minguk" | "font-dahyun";
type BgColor =
  | "bg-white"
  | "bg-gray-5"
  | "bg-primary-light1"
  | "bg-primary-dark1"
  | "bg-primary"
  | "bg-red-1"
  | "bg-yellow-1"
  | "bg-purple-1"
  | "bg-black";

interface Props {
  value: string;
  onChange: (text: string) => void;
  selectedFont: FontType;
  selectedBgColor: BgColor;
}

export const MessageEditor: React.FC<Props> = ({
  value,
  onChange,
  selectedBgColor,
  selectedFont,
}) => {
  const [text, setText] = useState("");
  const [font, setFont] = useState<FontType>(selectedFont);
  const [bg, setBg] = useState<BgColor>(selectedBgColor);

  return (
    <form className="space-y-4">
      <Typography element="h2" variant="b20-medium" className="mt-10">
        글씨체 선택
      </Typography>
      <div className="flex gap-2 mt-2">
        <Button
          variant={"outlined"}
          size={"small"}
          type="button"
          isActive={font === "font-pretendard"}
          onClick={() => setFont("font-pretendard")}
        >
          기본
        </Button>
        <Button
          variant={"outlined"}
          size={"small"}
          type="button"
          isActive={font === "font-minguk"}
          onClick={() => setFont("font-minguk")}
        >
          손글씨
        </Button>
        <Button
          variant={"outlined"}
          size={"small"}
          type="button"
          isActive={font === "font-dahyun"}
          onClick={() => setFont("font-dahyun")}
        >
          동글동글
        </Button>
      </div>

      <Typography element="h2" variant="b20-medium" className="mt-10">
        배경색 선택
      </Typography>
      <div className="flex gap-2">
        {(
          [
            "bg-white",
            "bg-gray-5",
            "bg-primary-light1",
            "bg-primary-dark1",
            "bg-primary",
            "bg-red-1",
            "bg-yellow-1",
            "bg-purple-1",
            "bg-black",
          ] as BgColor[]
        ).map((color) => (
          <button
            key={color}
            onClick={() => setBg(color)}
            type="button"
            className={cx("w-6 h-6 rounded-full border", color)}
          />
        ))}
      </div>

      {/* 카드 */}
      <div className={cx("w-full p-8 rounded-xl shadow", bg)}>
        <textarea
          className={cx(
            "w-full h-80 resize-none outline-none bg-transparent text-white text-center text-xl",
            font,
          )}
          placeholder="내용을 입력하세요..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {/* From 입력 */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">From.</span>
          <input
            className="border-b border-gray-400 focus:outline-none flex-1 bg-transparent"
            placeholder="이름 입력"
          />
        </div>
      </div>

      {/* 보내기 버튼 */}
      <Button variant={"secondary"} size={"large"} wide>
        보내기
      </Button>
    </form>
  );
};
