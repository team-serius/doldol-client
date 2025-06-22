import { Button, Typography } from "@ui/components";
import Link from "next/link";

interface Props {
  paperId: string;
  userName: string;
}

const MessageSendCompleteContainer: React.FC<Props> = ({
  paperId,
  userName,
}) => {
  return (
    <>
      <Typography variant={"h24"} className="mt-10">
        {userName} 님에게
        <br />
        메시지를 보냈어요!
      </Typography>
      <Link href={"/paper/" + paperId}>
        <Button variant={"secondary"} size={"large"} wide className="mt-10">
          완료
        </Button>
      </Link>
    </>
  );
};

export default MessageSendCompleteContainer;
