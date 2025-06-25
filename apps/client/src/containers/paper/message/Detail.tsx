import { Button, Notify, Typography } from "@ui/components";
import { useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import cx from "clsx";
import { getTextColor } from "@/utils/messageStyle";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { deleteMessage, getMessageList } from "@/services/message";
import { Message } from "@/types/message";
import { PenFill } from "@icons/PenFill";
import { DeleteFill } from "@icons/DeleteFill";
import { ArrowSLineLeft } from "@icons/ArrowSLineLeft";
import { ArrowSLineRight } from "@icons/ArrowSLineRight";
import dayjs from "dayjs";
import Link from "next/link";
import { HELPER_MESSAGES } from "@libs/utils/message";
import { ErrorDTO } from "@/types/error";
import { AxiosError, isAxiosError } from "axios";
import { AlertFill } from "@icons/AlertFill";

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

  const { mutate: onDeleteMessageApi, isPending } = useMutation({
    mutationFn: (messageId: number) => deleteMessage(messageId),
    mutationKey: ["postMessage", paperId, messages[activeIndex]?.messageId],
    onSuccess: (res, variables) => {
      if (res) {
        Notify.success(HELPER_MESSAGES.messageDeleteSuccess);
        setMessages((prev) =>
          prev.filter((msg) => msg.messageId !== variables),
        );
        if (activeIndex >= messages.length - 1) {
          setActiveIndex(messages.length - 2);
        }
        if (swiperRef.current) {
          swiperRef.current.slideTo(activeIndex);
        }
      }
    },
    onError: (error: AxiosError) => {
      if (isAxiosError<ErrorDTO>(error)) {
        Notify.error(error.response?.data.message);
      }
    },
  });

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

  const onDeleteMessage = (messageId: number) => {
    if (confirm("메시지를 삭제하시겠습니까?")) {
      onDeleteMessageApi(messageId);
    }
  };

  const isLoading = isPending;

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
              {dayjs(message.updatedAt).format("YY.MM.DD HH:mm")}
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
                  <div className="p-2">
                    {messageType === "SEND" ? "To." : "From."}
                  </div>

                  <div className="border-b-2 p-2 w-full block border-gray-3 max-w-60 truncate">
                    {messageType === "SEND" ? message.toName : message.fromName}
                  </div>
                </Typography>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {messages[activeIndex] && (
        <div className="grid grid-cols-2 gap-2 mt-10">
          {messageType === "SEND" ? (
            <Link
              href={`/paper/${paperId}/message/edit?messageId=${messages[activeIndex].messageId}`}
            >
              <Button
                variant={"outlined"}
                size={"medium"}
                wide
                icon={{ DefaultComponent: PenFill }}
              >
                수정하기
              </Button>
            </Link>
          ) : (
            <Link
              href={`/paper/${paperId}/message/edit?messageId=${messages[activeIndex].messageId}`}
            >
              <Button
                variant={"outlined"}
                size={"medium"}
                wide
                icon={{ DefaultComponent: AlertFill }}
              >
                신고하기
              </Button>
            </Link>
          )}

          <Button
            variant={"outlined"}
            size={"medium"}
            wide
            icon={{ DefaultComponent: DeleteFill }}
            onClick={() => onDeleteMessage(messages[activeIndex]?.messageId)}
            disabled={isLoading}
          >
            삭제하기
          </Button>
        </div>
      )}
    </div>
  );
};

export default MessageDetailContainer;
