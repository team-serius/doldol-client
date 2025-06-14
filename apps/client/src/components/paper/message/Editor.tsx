import { useState } from "react";
import clsx from "clsx";

type FontType = "Pretendard" | "Jua" | "UhBeeDotum";
type BgColor = "bg-white" | "bg-gray-100" | "bg-cyan-500";

interface CustomTextFieldProps {
  value: string;
  onChange: (text: string) => void;
  selectedFont: FontType;
  selectedBgColor: BgColor;
}

export const MessageEditor = () => {
  const [text, setText] = useState("");
  const [font, setFont] = useState("font-pretendard");
  const [bg, setBg] = useState("bg-cyan-500");

  return (
    <div className="space-y-4">
      {/* 글씨체 선택 */}
      <div className="flex gap-2">
        <button
          onClick={() => setFont("font-pretendard")}
          className="border px-2 py-1 rounded"
        >
          프리텐다드
        </button>
        <button
          onClick={() => setFont("font-jua")}
          className="border px-2 py-1 rounded"
        >
          주아체
        </button>
        <button
          onClick={() => setFont("font-uhbee")}
          className="border px-2 py-1 rounded"
        >
          얼굴이 밝다
        </button>
      </div>

      {/* 배경색 선택 */}
      <div className="flex gap-2">
        {[
          "bg-white",
          "bg-cyan-500",
          "bg-purple-300",
          "bg-yellow-200",
          "bg-pink-500",
          "bg-black",
        ].map((color) => (
          <button
            key={color}
            onClick={() => setBg(color)}
            className={clsx("w-6 h-6 rounded-full border", color)}
          />
        ))}
      </div>

      {/* 카드 */}
      <div className={clsx("w-full h-80 p-4 rounded-xl shadow", bg)}>
        <textarea
          className={clsx(
            "w-full h-full resize-none outline-none bg-transparent text-white text-center",
            font,
          )}
          placeholder="내용을 입력하세요..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      {/* From 입력 */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">From.</span>
        <input
          className="border-b border-gray-400 focus:outline-none flex-1 bg-transparent"
          placeholder="이름 입력"
        />
      </div>

      {/* 보내기 버튼 */}
      <button className="bg-black text-white w-full py-2 rounded">
        보내기
      </button>
    </div>
  );
};
