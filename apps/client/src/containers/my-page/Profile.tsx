import { Button, Typography } from "@ui/components";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ArrowSLineRight } from "@icons/ArrowSLineRight";
import Chip from "@ui/components/Chip/Chip";
import { Icon } from "@ui/components/Icon";
import Link from "next/link";
import { Modal } from "@ui/components";
import { Notify } from "@ui/components";
import { PlusLine } from "@icons/PlusLine";
import PrivacyPolicyContent from "@/components/serviceinfo/PrivacyPolicy";
import TermsOfServiceContent from "@/components/serviceinfo/TermsOfService";
import { getColorFromString } from "@/utils/color";
import { postWithdraw } from "@/services/withdraw";
import { useAuthStore } from "@/lib/store/auth";
import useMe from "@/hooks/useMe";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  isLogoVisible?: boolean;
}

type ModalType = "PrivacyPolicy" | "TermsOfService" | null;

const ProfileContainer = () => {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  const router = useRouter();
  const queryClient = useQueryClient();
  const { setUserData } = useAuthStore();

  const { user, onLogout } = useMe();

  // 유저 정보(프로필 배경색, 이름)
  const userName = user?.name ?? "돌돌";
  const userBackgroundColor = getColorFromString(user?.email || "");

  // 모달 열기
  const OpenModal = (target: ModalType) => {
    setOpenModal(target);
  };

  // 모달 닫기 - null
  const CloseModal = () => {
    setOpenModal(null);
  };

  // 회원 탈퇴
  const { mutate: withdrawMutation } = useMutation({
    mutationFn: postWithdraw,
    onSuccess: () => {
      console.log("탈퇴 성공");
      Notify.success("이용해주셔서 감사합니다.");
      setUserData(null);
      queryClient.clear();
      router.replace("/");
    },
    onError: (error: any) => {
      console.error("회원 탈퇴 오류 발생:", error);
      const errorMessage = error.message || "알 수 없는 오류가 발생했습니다.";
      Notify.error(`탈퇴 실패: ${errorMessage}`);
    },
  });

  const onWithdraw = () => {
    if (!window.confirm("정말 탈퇴하시겠습니까?")) {
      return;
    }
    withdrawMutation();
  };

  return (
    <div className=" flex flex-col  items-center w-full">
      <div className="flex mt-5 justify-between w-full">
        <div className="flex gap-5 ">
          <Chip
            src="/assets/logos/symbol-incase-small.png"
            size={56}
            bgColor={userBackgroundColor}
          />
          <Typography variant="b18-bold" className="mt-3">
            {userName}님
          </Typography>
        </div>
        <Link href={"/my-page/edit-profile"}>
          <Button variant="primary" size="medium" className="mt-2">
            정보 수정
          </Button>
        </Link>
      </div>
      <div className="w-full mt-5 px-0 border border-2 border-gray-3 py-5 rounded-lg">
        <Link href={"/paper"}>
          <div className="flex justify-between px-6">
            <div className="flex gap-10">
              <Typography variant="b18-bold">롤링페이퍼</Typography>
            </div>
            <Icon icon={ArrowSLineRight} color="black" />
          </div>
        </Link>
        <Link href={"/paper/create"}>
          <div className="flex justify-between px-6 mt-4">
            <div className="flex gap-10">
              <Typography variant="b18-bold">새로 만들기</Typography>
            </div>
            <Icon icon={ArrowSLineRight} color="black" />
          </div>
        </Link>
      </div>

      <Typography
        variant="b14-bold"
        className="mt-10 text-left text-gray-2 w-full"
      >
        서비스 정보
      </Typography>
      <div
        className="mt-5 text-left w-full cursor-pointer hover:text-green-1"
        onClick={() => OpenModal("PrivacyPolicy")}
      >
        <Typography variant="b18-bold">개인정보 처리방침</Typography>
      </div>
      <div
        className="mt-4 text-left w-full cursor-pointer hover:text-green-1"
        onClick={() => OpenModal("TermsOfService")}
      >
        <Typography variant="b18-bold" className="text-left w-full">
          서비스 이용 약관
        </Typography>
      </div>

      {openModal === "PrivacyPolicy" && (
        <Modal isOpen={true} onClose={CloseModal}>
          <PrivacyPolicyContent />
        </Modal>
      )}
      {openModal === "TermsOfService" && (
        <Modal isOpen={true} onClose={CloseModal}>
          <TermsOfServiceContent />
        </Modal>
      )}

      {/* 로그아웃 */}
      <Typography
        variant="b14-bold"
        className="mt-10 text-left text-gray-2 w-full"
      >
        로그인 관리
      </Typography>
      <Typography
        variant="b18-bold"
        className="mt-5 text-left w-full hover:text-green-1"
        onClick={onLogout}
      >
        로그아웃
      </Typography>

      {/* 탈퇴 */}
      <Typography
        variant="b18-bold"
        className="mt-4 text-left w-full hover:text-green-1"
        onClick={onWithdraw}
      >
        탈퇴하기
      </Typography>
    </div>
  );
};

export default ProfileContainer;
