"use client";

import { MessageEditor } from "@/components/paper/message/Editor";
import { useEffect, useState } from "react";

interface Props {
  paperId: string;
  messageId?: string;
}

const MessageEditContainer: React.FC<Props> = ({ paperId, messageId }) => {
  //TODO: 메시지 폼 데이터로 수정
  const [content, setContent] = useState<string>("");
  const [selectedFont, setSelectedFont] = useState<
    "font-pretendard" | "font-minguk" | "font-dahyun"
  >("font-pretendard");
  const [selectedBgColor, setSelectedBgColor] = useState<
    | "bg-white"
    | "bg-gray-5"
    | "bg-primary-light1"
    | "bg-primary-dark1"
    | "bg-primary"
    | "bg-red-1"
    | "bg-yellow-1"
    | "bg-purple-1"
    | "bg-black"
  >("bg-white");
  const [messageData, setMessageData] = useState(null);

  useEffect(() => {
    if (messageId) {
      // TODO: API 호출 데이터 세팅
      // setMessageData(fetchedData);
    }
  }, [messageId]);

  const handleChange = (text: string) => {
    setContent(text);
  };

  return (
    <div>
      <MessageEditor
        value={""}
        onChange={handleChange}
        selectedFont={selectedFont}
        selectedBgColor={selectedBgColor}
      />
    </div>
  );
};

export default MessageEditContainer;
