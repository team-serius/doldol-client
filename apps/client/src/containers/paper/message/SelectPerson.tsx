"use client";

import { Button, Typography } from "@ui/components";

const TEST_DATA = [
  { userId: "user1", name: "홍길동" },
  { userId: "user2", name: "김철수" },
  { userId: "user3", name: "이영희" },
  { userId: "user4", name: "박지민" },
];

interface Props {
  paperId: string;
  onNext: (userId?: string) => void;
}

const MessageSelectPersonContainer: React.FC<Props> = ({ paperId, onNext }) => {
  const data = TEST_DATA; // TODO: API 호출로 현재 참여중인 사람 데이터 가져오기

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
        {data?.map((user) => (
          <li
            key={user.userId}
            className="flex items-center justify-between items-center w-full"
            onClick={() => onNext(user.userId)}
          >
            <div className="flex items-center gap-2">
              {/* TODO: chip 예정 */}
              <div>칩</div>
              <Typography element="span" variant="b18-medium">
                {user.name}
              </Typography>
            </div>

            <Button
              variant={"primary"}
              size={"small"}
              onClick={() => onNext(user.userId)}
            >
              선택하기
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MessageSelectPersonContainer;
