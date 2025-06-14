import { DetailFunc } from "@/interface/landing/detail.interface";

export const DETAIL: DetailFunc[] = [
  {
    key: "timecapsule",
    label: "타임캡슐",
    videoPath: "/assets/logos/timecapsulevideo.mp4",
    type: "video",
    description:
      "소중한 이에게 보내는 메시지! 설정한 특정 조건이 충족될 때까지 안전하게 보관하는 타임캡슐 기능입니다.",
  },
  {
    key: "customizing",
    label: "커스터마이징",
    videoPath: "/assets/logos/customizingvideo.mp4",
    type: "video",
    description:
      "소중한 메시지에 어울리는 글씨체와 배경색으로 특별함을 더할 수 있습니다.",
  },
  {
    key: "makingkit",
    label: "실물 키트 제작",
    image: "/assets/logos/preparingforservice.png",
    type: "image",
    description:
      "소중한 롤링페이퍼를 필름 롤처럼 돌돌 말아 영원히 간직할 수 있는 특별한 굿즈로 제작해 드립니다.",
  },
];
