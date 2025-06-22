import { Button, Typography } from "@ui/components";
import { act, useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import cx from "clsx";
import { getTextColor } from "@/utils/messageStyle";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getMessageList } from "@/services/message";
import { Message } from "@/types/message";
import { PenFill } from "@icons/PenFill";
import { DeleteFill } from "@icons/DeleteFill";
import { ArrowSLineLeft } from "@icons/ArrowSLineLeft";
import { ArrowSLineRight } from "@icons/ArrowSLineRight";
import dayjs from "dayjs";

interface Props {
  paperId: string;
  index: number;
  messageType: "SEND" | "RECEIVE";
}

const MessageDetailContainer: React.FC<Props> = ({
  paperId,
  index,
  messageType,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeIndex, setActiveIndex] = useState(index);
  const swiperRef = useRef<SwiperClass | null>(null);

  useInfiniteQuery({
    queryKey: ["messageList", "send", paperId],
    queryFn: ({ pageParam = 0 }) =>
      getMessageList({
        paperId: Number(paperId),
        messageType: messageType, // "SEND"로 고정
        cursorId: pageParam === 0 ? null : pageParam,
        size: 999,
      }).then((res) => {
        if (res.data.message.empty) {
          setMessages([]);
        } else {
          const newMessages = res.data.message.data;
          setMessages((prev) => [...prev, ...newMessages]);
        }
        return res.data;
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.message.hasNext ? lastPage.message.nextCursor : undefined;
    },
  });

  // FIXME: 페이지 불러오는 로직을 어떻게 구성할지 고민
  // const onNextSlide = () => {
  //   if (!swiperRef.current) return;
  //   if (
  //     hasNextPage &&
  //     !isFetchingNextPage &&
  //     !isFetching &&
  //     swiperRef.current.activeIndex + 2 === messages.length
  //   ) {
  //     console.log("Fetching next page");
  //     fetchNextPage();
  //   }
  //   swiperRef.current?.slideNext();
  // };

  return (
    <div className="relative px-8 mt-8">
      <Button
        className="absolute top-72 left-4 z-10"
        variant={"outlined"}
        size={"medium"}
        shape="circle"
        onClick={() => swiperRef.current?.slidePrev()}
        icon={{ DefaultComponent: ArrowSLineLeft }}
        disabled={activeIndex === 0 || messages.length === 0}
      />
      <Button
        className="absolute top-72 right-4 z-10"
        variant={"outlined"}
        size={"medium"}
        shape="circle"
        onClick={() => swiperRef.current?.slideNext()}
        icon={{ DefaultComponent: ArrowSLineRight }}
        disabled={activeIndex === messages.length - 1 || messages.length === 0}
      />
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={() => {
          if (swiperRef.current) {
            const activeIndex = swiperRef.current.activeIndex;
            setActiveIndex(activeIndex);
          }
        }}
        initialSlide={index}
      >
        {messages.map((message) => (
          <SwiperSlide key={message.messageId}>
            <Typography variant={"h24-bold"} className="mt-10 text-center">
              {dayjs(message.updatedAt).format("YY.MM.DD HH:ss")}
            </Typography>
            <div
              className={cx(
                "w-full p-8 rounded-xl shadow-xl mt-4",
                message.backgroundColor,
              )}
            >
              <div
                className={cx(
                  "w-full h-80 text-center text-xl whitespace-pre-line overflow-y-scroll",
                  message.fontStyle,
                  message.backgroundColor,
                  getTextColor(message.backgroundColor),
                )}
              >
                {message.content}
              </div>
              <div className="flex items-center gap-2">
                <Typography
                  element="div"
                  variant="b18-bold"
                  className={cx(
                    "flex gap-2",
                    getTextColor(message.backgroundColor),
                  )}
                >
                  <div className="p-2">From.</div>

                  <div className="border-b-2 p-2 w-full block border-gray-3 max-w-60 truncate">
                    {message.name}
                  </div>
                </Typography>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="grid grid-cols-2 gap-2 mt-10">
        {/* TODO: swiper.activeIndex, messages[activeIndex] 이용해서, 어떤 메시지 수정 삭제인지 분리 */}
        <Button
          variant={"outlined"}
          size={"medium"}
          wide
          icon={{ DefaultComponent: PenFill }}
          onClick={() => {
            console.log(activeIndex, messages[activeIndex]);
          }}
        >
          수정하기
        </Button>
        <Button
          variant={"outlined"}
          size={"medium"}
          wide
          icon={{ DefaultComponent: DeleteFill }}
        >
          삭제하기
        </Button>
      </div>
    </div>
  );
};

export default MessageDetailContainer;
