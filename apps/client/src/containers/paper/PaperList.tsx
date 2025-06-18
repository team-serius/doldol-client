"use client";

import { Button, Typography } from "@ui/components";

import Dropdown from "@ui/components/Dropdown/Dropdown";
import Image from "next/image";
import PaperBox from "@/components/paper/PaperBox";
import { PlusLine } from "@icons/PlusLine";
import { SORT } from "@/common/constants/sort";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { getPaperList } from "@/services/paper";
import { PaperListSort } from "@/enum/sort.enum";

const PaperListContainer = () => {
  const [sort, setSort] = useState<string>(SORT[0].id);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const {
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["paperList", sort],
    queryFn: ({ pageParam = 0 }) =>
      getPaperList({
        cursorId: pageParam,
        size: 10,
        sortDirection:
          PaperListSort[sort as keyof typeof PaperListSort] ||
          PaperListSort.LATEST,
      }).then((res) => res.data),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.rollingPaper.hasNext
        ? lastPage.rollingPaper.nextCursor
        : undefined;
    },
  });

  // IntersectionObserver로 마지막 요소 감지
  useEffect(() => {
    if (!observerRef.current || !hasNextPage || isFetchingNextPage) return;

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

  const handleSortChange = (item: any) => {
    setSort(item.id);
  };

  const papers = data?.pages.flatMap((page) => page.rollingPaper.list) ?? [];
  const paperCount = data?.pages[0]?.paperCount ?? 0;

  return (
    <>
      <div className="flex justify-between mt-6">
        <Dropdown
          placeholder="정렬 기준"
          items={SORT}
          onChange={handleSortChange}
          valueKey="id"
          displayKey="label"
        />
        <Button
          variant={"outlined"}
          size={"medium"}
          icon={{ DefaultComponent: PlusLine }}
        >
          새로 만들기
        </Button>
      </div>

      {paperCount > 0 && (
        <Typography variant={"b16"} className="mt-6">
          총 <b>{paperCount}개</b>의 롤링페이퍼가 있어요!
        </Typography>
      )}

      {paperCount > 0 ? (
        <div className="flex flex-col gap-4 mt-4">
          {papers.map((paper) => (
            <PaperBox key={paper.paperId} data={paper} />
          ))}
          <div ref={observerRef} className="h-10" />
        </div>
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
            롤링 페이퍼가 없다 돌돌..
          </Typography>
        </div>
      )}
    </>
  );
};

export default PaperListContainer;
