import { Button, Typography } from "@ui/components";

import Dropdown from "@ui/components/Dropdown/Dropdown";
import Image from "next/image";
import { Paper } from "@/types/paper";
import PaperBox from "@/components/paper/PaperBox";
import { PlusLine } from "@icons/PlusLine";
import { SORT } from "@/common/constants/sort";
import dayjs from "dayjs";

// FIXME: API 연결 후 삭제
const TEST_DATA: Paper[] = [
  {
    paperId: 1,
    name: "첫 번째 롤링페이퍼",
    description: "첫 번째 롤링페이퍼 설명",
    participantsCount: 10,
    messageCount: 5,
    openDate: dayjs("2023-10-01T00:00:00Z"),
  },
  {
    paperId: 2,
    name: "두 번째 롤링페이퍼",
    description: "두 번째 롤링페이퍼 설명",
    participantsCount: 20,
    messageCount: 15,
    openDate: dayjs("2023-10-02T00:00:00Z"),
  },
  {
    paperId: 3,
    name: "세 번째 롤링페이퍼",
    description: "세 번째 롤링페이퍼 설명",
    participantsCount: 30,
    messageCount: 25,
    openDate: dayjs("2023-10-03T00:00:00Z"),
  },
];

const PaperListContainer = () => {
  // TODO: API 연결
  // intersectionObserver를 사용하여 무한 스크롤 구현 예정
  // const { data, fetchNextPage, hasNextPage } = usePaperList();
  return (
    <>
      <div className="flex justify-between mt-6">
        <Dropdown
          placeholder="정렬 기준"
          items={SORT}
          valueKey={"id"}
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
      {TEST_DATA.length > 0 && (
        <Typography variant={"b16"} className="mt-6">
          총 <b>{TEST_DATA.length}개</b>의 롤링페이퍼가 있어요!
        </Typography>
      )}

      {TEST_DATA.length > 0 ? (
        <div className="flex flex-col gap-4 mt-4">
          {TEST_DATA.map((paper) => (
            <PaperBox key={paper.paperId} data={paper} />
          ))}
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
      {/* TODO: 무한스크롤 구현 */}
    </>
  );
};

export default PaperListContainer;
