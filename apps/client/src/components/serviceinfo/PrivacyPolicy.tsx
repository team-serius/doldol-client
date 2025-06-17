import React from "react";
import { Typography } from "@ui/components";

const PrivacyPolicyContent: React.FC = () => {
  return (
    <div>
      <Typography variant="b20-bold" className="mb-4">
        '돌돌' 개인정보 처리방침
      </Typography>
      <Typography variant="b14" className="mb-4">
        팀 '시리우스' (이하 '회사')는 이용자의 개인정보를 소중히 생각하며,
        「개인정보보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」
        등 관련 법규를 준수하여 이용자의 개인정보 보호에 최선을 다하고 있습니다.
        본 개인정보 처리방침은 회사가 어떤 개인정보를 수집하고, 수집한 정보를
        어떻게 사용하며, 이용자의 개인정보를 어떻게 보호하는지에 대한 내용을
        담고 있습니다.
      </Typography>
      <Typography variant="b18-bold" className="mb-4">
        1. 개인정보의 수집 및 이용 목적
      </Typography>
      <Typography variant="b14" className="mb-2">
        회사는 온라인 롤링페이퍼 서비스 제공을 위해 최소한의 개인정보를
        수집하며, 다음의 목적으로 활용합니다.
      </Typography>
      <ul className="pl-5 mb-4">
        <li>
          <Typography variant="b14" className="mb-2">
            회원 관리: 회원 가입 및 본인 확인, 서비스 이용 및 롤링페이퍼 생성
            권한 부여, 롤링페이퍼 관리, 서비스 이용약관 위반 회원에 대한 제재,
            비인가 사용 방지, 고지사항 전달, 회원 탈퇴 의사 확인 등
          </Typography>
        </li>
        <li>
          <Typography variant="b14" className="mb-2">
            서비스 제공: 온라인 롤링페이퍼 생성 및 메시지 작성/조회 기능 제공,
            타임캡슐 기능 운영, 굿즈 제작 연동 서비스 제공 등
          </Typography>
        </li>
        <li>
          <Typography variant="b14" className="mb-2">
            고객 상담 및 불만 처리: 이용자 문의 및 불만 처리, 공지사항 전달 등
          </Typography>
        </li>
        <li>
          <Typography variant="b14" className="mb-2">
            서비스 개선 및 통계: 서비스 이용 기록, 접속 빈도, 접속 기기 정보
            등을 분석하여 서비스 개선 및 신규 서비스 개발에 활용
          </Typography>
        </li>
      </ul>
      <Typography variant="b18-bold" className="mt-6 mb-4">
        2. 수집하는 개인정보 항목 및 수집 방법
      </Typography>
      <Typography variant="b14" className="mb-2">
        회사는 다음과 같은 개인정보 항목을 수집하며, 서비스 가입 및 이용
        과정에서 동의를 얻어 수집합니다.
      </Typography>
      <Typography variant="b16-medium" className="mt-4 mb-1">
        필수 수집 항목:
      </Typography>
      <ul className="list-disc pl-5 mb-2">
        <li>
          <Typography variant="b14" className="mb-2">
            회원 가입 시: 아이디, 비밀번호, 이름, 휴대 전화 번호, 이메일
          </Typography>
        </li>
        <li>
          <Typography variant="b14" className="mb-2">
            롤링페이퍼 메시지 작성 시: 작성자 닉네임 (메시지 내용, 글씨체 선택,
            배경색 선택 등은 비식별 정보)
          </Typography>
        </li>
      </ul>
      <Typography variant="b16-medium" className="mt-4 mb-1">
        서비스 이용 과정에서 자동으로 수집될 수 있는 정보:
      </Typography>
      <ul className="list-disc pl-5 mb-4">
        <li>
          <Typography variant="b14" className="mb-2">
            IP 주소, 서비스 이용 기록, 접속 로그, 쿠키, 기기 정보, 브라우저 정보
            등
          </Typography>
        </li>
        <li>
          <Typography variant="b14" className="mb-2">
            수집 목적: 서비스 이용에 대한 통계 분석
          </Typography>
        </li>
      </ul>
      <Typography variant="b18-bold" className="mt-6 mb-2">
        3. 개인정보의 보유 및 이용 기간
      </Typography>
      <Typography variant="b14" className="mb-2">
        이용자의 개인정보는 원칙적으로 개인정보 수집 및 이용 목적이 달성되면
        지체 없이 파기합니다.
      </Typography>
      <ul className="list-disc pl-5 mb-4">
        <li>
          <Typography variant="b14" className="mb-2">
            회원 정보: 회원 탈퇴 시 즉시 파기됩니다.
          </Typography>
        </li>
        <li>
          <Typography variant="b14" className="mb-2">
            롤링페이퍼 및 메시지 내용: 롤링페이퍼 생성자가 롤링페이퍼를 삭제하기
            전까지 보관됩니다. 타임캡슐 기능 이용 시 설정된 공개일까지 보관 후
            서비스 제공을 위해 유지됩니다.
          </Typography>
        </li>
      </ul>
      <Typography variant="b18-bold" className="mt-6 mb-2">
        4. 개인정보의 제3자 제공에 관한 사항
      </Typography>
      <Typography variant="b14" className="mb-4">
        회사는 이용자의 개인정보를 '1. 개인정보의 수집 및 이용 목적'에서 고지한
        범위를 초과하여 이용하거나, 이용자의 사전 동의 없이 제3자에게 제공하지
        않습니다. 다만, 법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위한
        경우에는 예외로 합니다.
      </Typography>
      <Typography variant="b18-bold" className="mt-6 mb-2">
        5. 개인정보 처리 위탁에 관한 사항
      </Typography>
      <Typography variant="b14" className="mb-4">
        회사는 개인정보 처리 업무를 외부에 위탁하지 않습니다.
      </Typography>
      <Typography variant="b18-bold" className="mt-6 mb-2">
        6. 이용자 및 법정대리인의 권리 및 행사 방법
      </Typography>
      <Typography variant="b14" className="mb-2">
        이용자(만 14세 미만 아동의 경우 법정대리인)는 언제든지 등록되어 있는
        자신의 개인정보를 열람하거나 수정할 수 있으며, 회원 탈퇴를 요청하여
        개인정보 수집 및 이용에 대한 동의를 철회할 수 있습니다.
      </Typography>
      <ul className="pl-5 mb-4">
        <li>
          <Typography variant="b14" className="mb-2">
            개인정보 열람/수정: 서비스 내 '마이페이지' 또는 '개인정보 수정' 메뉴
            이용
          </Typography>
        </li>
        <li>
          <Typography variant="b14" className="mb-2">
            동의 철회/회원 탈퇴: 서비스 내 '회원 탈퇴' 메뉴 이용 또는 개인정보
            보호책임자에게 서면, 전화, 이메일 등을 통해 연락
          </Typography>
        </li>
      </ul>
      <Typography variant="b18-bold" className="mt-6 mb-2">
        7. 개인정보의 파기 절차 및 방법
      </Typography>
      <Typography variant="b14" className="mb-2">
        회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이
        파기합니다. 파기 절차 및 방법은 다음과 같습니다.
      </Typography>
      <ul className="pl-5 mb-4">
        <li>
          <Typography variant="b14" className="mb-2">
            파기 절차: 이용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된
            후 즉시 파기됩니다.
          </Typography>
        </li>
        <li>
          <Typography variant="b14" className="mb-2">
            파기 방법:
          </Typography>
        </li>
        <ul className="pl-5">
          <li>
            <Typography variant="b14" className="mb-2">
              1) 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는
              기술적 방법을 사용하여 삭제합니다.
            </Typography>
          </li>
          <li>
            <Typography variant="b14" className="mb-2">
              2) 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여
              파기합니다.
            </Typography>
          </li>
        </ul>
      </ul>
      <Typography variant="b18-bold" className="mt-6 mb-2">
        8. 개인정보의 안전성 확보 조치
      </Typography>
      <Typography variant="b14" className="mb-2">
        회사는 이용자의 개인정보를 보호하기 위해 다음과 같은 기술적, 관리적,
        물리적 조치를 취하고 있습니다.
      </Typography>
      <ul className="pl-5 mb-4">
        <li>
          <Typography variant="b14" className="mb-2">
            기술적 조치: 개인정보 암호화, 보안 프로그램 설치 및 주기적 갱신,
            백업 시스템 운영, 해킹 방지를 위한 보안 시스템 운영 등
          </Typography>
        </li>
        <li>
          <Typography variant="b14" className="mb-2">
            관리적 조치: 개인정보 취급 직원의 최소화 및 교육, 내부 관리계획 수립
            및 시행, 정기적인 자체 감사 실시 등
          </Typography>
        </li>
        <li>
          <Typography variant="b14" className="mb-2">
            물리적 조치: 개인정보가 포함된 서류, 보조 저장매체 등을 잠금장치가
            있는 안전한 장소에 보관
          </Typography>
        </li>
      </ul>
      <Typography variant="b18-bold" className="mt-6 mb-2">
        9. 개인정보 보호책임자
      </Typography>
      <Typography variant="b14" className="mb-2">
        회사는 개인정보 처리에 관한 업무를 총괄하고 개인정보 처리와 관련한
        이용자의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보
        보호책임자를 지정하고 있습니다.
      </Typography>
      <div className="ml-5 mb-4">
        <Typography variant="b14" className="mb-2">
          <strong>개인정보 보호책임자:</strong>
        </Typography>

        <ul className="pl-0">
          <li>
            <Typography variant="b14">성명: 손영호</Typography>
          </li>
          <li>
            <Typography variant="b14">소속/직책: 16회차 반장모시깽</Typography>
          </li>
          <li>
            <Typography variant="b14">메일 주소: son@naver.com</Typography>
          </li>
        </ul>
      </div>
      <Typography variant="b14" className="mb-4">
        이용자는 회사의 서비스를 이용하며 발생하는 모든 개인정보 보호 관련 문의,
        불만 처리, 피해 구제 등에 관한 사항을 개인정보 보호책임자에게 문의할 수
        있습니다. 회사는 이용자의 문의에 대해 지체 없이 답변 및 처리해 드릴
        것입니다.
      </Typography>
      <Typography variant="b18-bold" className="mt-6 mb-2">
        10. 권익침해 구제 방법
      </Typography>
      <Typography variant="b14" className="mb-2">
        이용자는 개인정보 침해에 대한 피해 구제, 상담 등을 아래 기관에 문의할 수
        있습니다.
      </Typography>
      <ul className="pl-5 mb-4">
        <li>
          {" "}
          <Typography variant="b14" className="mb-4">
            개인정보 침해신고센터 (한국인터넷진흥원 운영): (국번없이) 118
            (privacy.kisa.or.kr)
          </Typography>
        </li>
        <li>
          {" "}
          <Typography variant="b14" className="mb-4">
            개인정보 분쟁조정위원회: (국번없이) 1833-6972 (www.kopico.go.kr)
          </Typography>
        </li>
        <li>
          {" "}
          <Typography variant="b14" className="mb-4">
            대검찰청 사이버수사과: (국번없이) 1301 (www.spo.go.kr)
          </Typography>
        </li>
        <li>
          {" "}
          <Typography variant="b14" className="mb-4">
            경찰청 사이버수사국: (국번없이) 182 (ecrm.police.go.kr/minwon/main)
          </Typography>
        </li>
      </ul>
      <Typography variant="b18-bold" className="mt-6 mb-2">
        11. 고지의 의무
      </Typography>
      <Typography variant="b14" className="mb-2">
        현 개인정보 처리방침의 내용은 정부의 정책 또는 보안 기술의 변경, 혹은
        서비스 내용의 추가·삭제 및 변경에 따라 내용의 추가, 삭제 및 수정이 있을
        시 개정 최소 7일 전에 홈페이지 또는 앱의 공지사항을 통해 고지할
        것입니다. 다만, 개인정보의 수집 및 활용, 제3자 제공 등과 같이 이용자
        권리의 중요한 변경이 있을 경우에는 최소 30일 전에 고지할 것입니다.
      </Typography>{" "}
      <Typography variant="b14" className="m4-4">
        <strong>최초 시행일: 2025년 06월 14일</strong>
      </Typography>
      <p className="mt-4 font-medium"></p>
    </div>
  );
};

export default PrivacyPolicyContent;
