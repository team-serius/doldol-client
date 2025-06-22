import { Button, Notify, Typography } from "@ui/components";

import Image from "next/image";
import Link from "next/link";
import { MessageCard } from "@/components/paper/message/Card";
import { PaperDetailResponse } from "@/types/paper";
import { SendFill } from "@icons/SendFill";
import dayjs from "dayjs";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getMessageList } from "@/services/message";
import { useEffect, useRef } from "react";
import { ShareFill } from "@icons/ShareFill";

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
    refetchOnWindowFocus: false, // 윈도우 포커스 시 재조회 하지 않음
    retry: false, // 실패 시 재시도 하지 않음
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

  const onCopyLink = () => {
    const link = `${window.location.origin}/invite/${paperData.code}`;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        Notify.success("초대 링크가 복사되었습니다.");
      })
      .catch(() => {
        Notify.error("초대 링크 복사에 실패했습니다.");
      });
  };

  return (
    <section className="mt-6">
      <Typography element="h2" variant="h24-bold" className="w-full">
        <span className="truncate block">{paperData.name}</span>
      </Typography>
      <div className="grid grid-cols-2 gap-5 mt-4">
        <Link href={`/paper/${paperId}/message/edit`}>
          <Button
            variant="outlined"
            size="medium"
            wide
            icon={{ DefaultComponent: SendFill }}
          >
            메시지 작성하기
          </Button>
        </Link>
        {paperData.isMaster && (
          <Button
            variant={"outlined"}
            size={"medium"}
            wide
            icon={{ DefaultComponent: ShareFill }}
            onClick={onCopyLink}
          >
            롤링페이퍼 공유
          </Button>
        )}
      </div>
      {messageCount > 0 ? (
        <>
          <Typography variant="b16" className="mt-4 text-gray-600">
            총 <b>{messageCount}개</b>의 메시지를 작성했어요!
          </Typography>
          <div className="mt-6 grid grid-cols-3 gap-y-4">
            {messages.map((message, index) => (
              <Link
                key={message.messageId}
                href={{
                  pathname: `/paper/${paperId}/message/detail`,
                  query: {
                    type: message.messageType.toLowerCase(),
                    index: index,
                  },
                }}
              >
                <MessageCard
                  key={message.messageId}
                  data={message}
                  isOdd={index % 2 === 1}
                  isSend
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
