import { MessageCard } from "@/components/paper/message/Card";
import { MessageListResponse } from "@/types/message";
import { PaperDetailResponse } from "@/types/paper";
import { SendFill } from "@icons/SendFill";
import { SettingFill } from "@icons/SettingFill";
import { Button, Typography } from "@ui/components";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

const TEST_DATA: MessageListResponse = {
  messageCount: 5,
  message: {
    list: [
      {
        messageId: 1,
        messageType: "SENT",
        content: "안녕하세요! 롤링페이퍼 테스트 메시지입니다.",
        fontStyle: "pretendard",
        backgroundColor: "primary-brand",
        isDeleted: false,
        name: "홍길동",
        createdAt: dayjs("2023-10-01T12:00:00Z"),
        updatedAt: dayjs("2023-10-01T12:00:00Z"),
      },
      {
        messageId: 2,
        messageType: "SENT",
        content: "롤링페이퍼 작성이 정말 재밌어요!",
        fontStyle: "minguk",
        backgroundColor: "red-1",
        isDeleted: false,
        name: "김철수",
        createdAt: dayjs("2023-10-02T14:30:00Z"),
        updatedAt: dayjs("2023-10-02T14:30:00Z"),
      },
      {
        messageId: 3,
        messageType: "SENT",
        content: "이 메시지는 삭제된 메시지입니다.",
        fontStyle: "dahyun",
        backgroundColor: "gray-3",
        isDeleted: true,
        name: "이영희",
        createdAt: dayjs("2023-10-03T09:15:00Z"),
        updatedAt: dayjs("2023-10-03T09:15:00Z"),
      },
      {
        messageId: 4,
        messageType: "SENT",
        content: "롤링페이퍼를 통해 친구들에게 메시지를 남길 수 있어요.",
        fontStyle: "dahyun",
        backgroundColor: "white",
        isDeleted: false,
        name: "박지민",
        createdAt: dayjs("2023-10-04T11:45:00Z"),
        updatedAt: dayjs("2023-10-04T11:45:00Z"),
      },
      {
        messageId: 5,
        messageType: "SENT",
        content: "마지막 메시지입니다. 모두 즐거운 하루 되세요!",
        fontStyle: "pretendard",
        backgroundColor: "green-1",
        isDeleted: false,
        name: "최수영",
        createdAt: dayjs("2023-10-05T16:20:00Z"),
        updatedAt: dayjs("2023-10-05T16:20:00Z"),
      },
    ],
    size: 0,
    nextCursor: 0,
    hasNext: false,
    empty: true,
  },
};

interface Props {
  paperData: PaperDetailResponse;
  paperId: string;
}

const PaperDetailSendContainer: React.FC<Props> = ({ paperData, paperId }) => {
  const data = TEST_DATA; // 실제 데이터는 API 호출로 가져와야 합니다.
  return (
    <section className="mt-6">
      <Typography element="h2" variant="h24-bold" className="w-full">
        <span className="truncate block">{paperData.paper.name}</span>
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
      {data.messageCount === 0 ? (
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
      ) : (
        <>
          <Typography variant="b16" className="mt-4 text-gray-600">
            총 <b>{data.messageCount}개</b>의 메시지를 작성했어요!
          </Typography>
          <div className="mt-6 grid grid-cols-3 gap-y-4">
            {data.message.list.map((message, index) => (
              <Link
                key={message.messageId}
                href={{
                  pathname: `/paper/${paperId}`, // 이건 상위 스코프에서 받았다고 가정
                  query: {
                    type: message.messageType.toLowerCase(), // "send" or "receive"
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
        </>
      )}
    </section>
  );
};

export default PaperDetailSendContainer;
