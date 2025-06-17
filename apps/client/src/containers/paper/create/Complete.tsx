import { Button, Typography } from "@ui/components";

import Link from "next/link";
import dayjs from "dayjs";

const TEST_DATA = {
  id: "test",
  name: "[KB] IT's Your Life 6기 16회차",
  description: "KB IT's Your Life 6기 16회차 롤링페이퍼입니다.",
  openDate: dayjs("2023-10-01T12:00:00Z"),
};

const PaperCreateCompleteContainer: React.FC = () => {
  const data = TEST_DATA;
  return (
    <>
      <Typography variant="h24" className="mt-10">
        새로운 롤링페이퍼가
        <br />
        만들어졌어요!
      </Typography>
      <Typography variant="b20-medium" className="mt-10">
        롤링페이퍼 정보
      </Typography>
      <Typography variant="b16-medium" className="mt-4">
        단체 이름
      </Typography>
      <Typography variant="b16" className="mt-2">
        {data.name}
      </Typography>

      <Typography variant="b16-medium" className="mt-10">
        설명
      </Typography>
      <Typography variant="b16" className="mt-2">
        {data.description}
      </Typography>

      <Typography variant="b16-medium" className="mt-10">
        메시지 공개 날짜
      </Typography>
      <Typography variant="b16" className="mt-2">
        {data.openDate.format("YY년 MM월 DD일")}
      </Typography>

      {/* TODO: 링크 복사  */}
      <Button variant={"primary"} size={"large"} wide className="mt-10 mb-4">
        초대 링크 공유하기
      </Button>
      <Link href={"/paper"}>
        <Button variant={"secondary"} size={"large"} wide>
          완료
        </Button>
      </Link>
    </>
  );
};

export default PaperCreateCompleteContainer;
