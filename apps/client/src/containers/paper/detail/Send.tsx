import { Button, Typography } from "@ui/components";

import Image from "next/image";
import Link from "next/link";
import { MessageCard } from "@/components/paper/message/Card";
import { PaperDetailResponse } from "@/types/paper";
import { SendFill } from "@icons/SendFill";
import { SettingFill } from "@icons/SettingFill";
import dayjs from "dayjs";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getMessageList } from "@/services/message";
import { useEffect, useRef } from "react";

interface Props {
  paperData: PaperDetailResponse;
  paperId: number;
}

const PaperDetailSendContainer: React.FC<Props> = ({ paperData, paperId }) => {
  const observerRef = useRef<HTMLDivElement | null>(null);
  const {
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["messageList", "send", paperId],
    queryFn: ({ pageParam = 0 }) =>
      getMessageList({
        paperId: paperId,
        messageType: "SEND", // "SEND"로 고정
        openDate: dayjs(paperData.openDate).format("YYYY-MM-DD"),
        cursorId: pageParam === 0 ? null : pageParam,
        size: 15,
      }).then((res) => {
        return res.data;
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.message.hasNext ? lastPage.message.nextCursor : undefined;
    },
    staleTime: 1000 * 60 * 5, // 5분 동안 캐시 유지
  });

  // IntersectionObserver로 마지막 요소 감지
  useEffect(() => {
    if (
      !observerRef.current ||
      !hasNextPage ||
      isFetchingNextPage ||
      isFetching
    )
      return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 },
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const messages = data?.pages.flatMap((page) => page.message.data) || [];
  const messageCount = data?.pages[0].messageCount ?? 0;

  return (
    <section className="mt-6">
      <Typography element="h2" variant="h24-bold" className="w-full">
        <span className="truncate block">{paperData.name}</span>
      </Typography>
      <div className="grid grid-cols-2 gap-5 mt-4">
        <Button
          variant="outlined"
          size="medium"
          wide
          icon={{ DefaultComponent: SendFill }}
        >
          메시지 작성하기
        </Button>
        {paperData.isMaster && (
          <Button
            variant={"outlined"}
            size={"medium"}
            wide
            icon={{ DefaultComponent: SettingFill }}
          >
            롤링페이퍼 관리
          </Button>
        )}
      </div>
      {messageCount > 0 && !isFetching ? (
        <>
          <Typography variant="b16" className="mt-4 text-gray-600">
            총 <b>{messageCount}개</b>의 메시지를 작성했어요!
          </Typography>
          <div className="mt-6 grid grid-cols-3 gap-y-4">
            {messages.map((message, index) => (
              <Link
                key={message.messageId}
                href={{
                  pathname: `/paper/${paperId}`,
                  query: {
                    type: message.messageType.toLowerCase(),
                    cursor: message.messageId,
                  },
                }}
              >
                <MessageCard
                  key={message.messageId}
                  data={message}
                  isOdd={index % 2 === 1}
                />
              </Link>
            ))}
          </div>
          <div ref={observerRef} className="h-10" />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center mt-10">
          <Image
            src="/assets/images/empty.png"
            alt="빈 롤링페이퍼 이미지"
            width={80}
            height={80}
            className="mb-4"
            priority
          />
          <Typography variant={"b20-medium"} className="mt-6 text-center">
            아직 작성한
            <br />
            메시지가 없다 돌돌..
          </Typography>
        </div>
      )}
    </section>
  );
};

export default PaperDetailSendContainer;
