"use client";

import { getParticipantList } from "@/services/participant";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Button, Typography } from "@ui/components";
import Image from "next/image";
import { useEffect, useRef } from "react";
import cx from "clsx";
import { getRandomColor } from "@/utils/color";

type Cursor = {
  cursorName: string;
  cursorId: number;
};

interface Props {
  paperId: string;
  onNext: (userId?: string, userName?: string) => void;
}

const MessageSelectPersonContainer: React.FC<Props> = ({ paperId, onNext }) => {
  const observerRef = useRef<HTMLDivElement | null>(null);
  const {
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["messageUserList", paperId],
    queryFn: ({
      pageParam = { cursorName: "", cursorId: 0 },
    }: {
      pageParam: Cursor;
    }) =>
      getParticipantList({
        id: Number(paperId),
        cursorName: pageParam.cursorId === 0 ? null : pageParam.cursorName,
        cursorId: pageParam.cursorId === 0 ? null : pageParam.cursorId,
        size: 10,
      }).then((res) => res.data),
    initialPageParam: {
      cursorName: "",
      cursorId: 0,
    },
    getNextPageParam: (lastPage) => {
      return lastPage.hasNext ? lastPage.nextCursor : undefined;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
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

  const userLists = data?.pages.flatMap((page) => page.data) ?? [];

  const onClickUser = (userId: string, userName: string) => {
    onNext(userId, userName);
  };

  return (
    <>
      <Typography element="h2" variant="h24" className="mt-10">
        메시지를 작성할
        <br />
        대상을 선택해주세요!
      </Typography>
      <Typography element="h3" variant="b20-medium" className="mt-10">
        현재 참여중인 사람
      </Typography>
      <ul className="flex flex-col gap-4 mt-4">
        {userLists.length > 0 ? (
          userLists?.map((user) => (
            <li
              key={user.userId}
              className="flex items-center justify-between items-center w-full"
            >
              <div className="flex items-center gap-2">
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
                  {user.name}
                </Typography>
              </div>

              <Button
                variant={"primary"}
                size={"small"}
                onClick={() => onClickUser(`${user.userId}`, `${user.name}`)}
              >
                선택하기
              </Button>
            </li>
          ))
        ) : isFetching ? (
          <Typography variant={"b16"} className="mt-10 text-center">
            로딩 중...
          </Typography>
        ) : (
          <div className="flex flex-col items-center justify-center mt-10">
            <Image
              src="/assets/images/empty.png"
              alt="빈 롤링페이퍼 이미지"
              width={80}
              height={80}
              className="mb-4"
            />
            <Typography variant={"b20-medium"} className="mt-6 text-center">
              아직 참여하고 있는
              <br />
              사람이 없다 돌돌..
            </Typography>
          </div>
        )}
      </ul>
    </>
  );
};

export default MessageSelectPersonContainer;
