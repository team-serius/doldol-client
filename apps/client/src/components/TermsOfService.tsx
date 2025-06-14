import React from 'react';
import { Typography } from '@ui/components';

const TermsOfServiceContent: React.FC = () => {
  return (
    <div>
      <Typography variant='b20-bold' className='mb-4'>
        '돌돌' 서비스 이용 약관
      </Typography>
      <Typography variant='b18-bold' className='mt-6 mb-2'>
        제1조 (목적)
      </Typography>
      <Typography variant='b14' className='mb-4'>
        본 약관은 팀 '시리우스' (이하 "회사")가 제공하는 '돌돌' 서비스 및 관련
        제반 서비스(이하 "서비스")의 이용과 관련하여 회사와 회원 간의 권리, 의무
        및 책임사항, 서비스 이용 조건 및 절차, 기타 필요한 사항을 규정함을
        목적으로 합니다.
      </Typography>
      <Typography variant='b18-bold' className='mb-4'>
        제2조 (용어의 정의)
      </Typography>
      <Typography variant='b14' className='mb-2'>
        본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
      </Typography>
      <ul className='pl-5 mb-4'>
        <li>
          <Typography variant='b14' className='mb-2'>
            "서비스"라 함은 구현되는 단말기(PC, 휴대형 단말기 등의 각종 유무선
            장치를 포함)와 상관없이 "회원"이 이용할 수 있는 온라인 롤링페이퍼
            제작 및 관리, 메시지 작성, 굿즈 제작 연동 등의 제반 서비스를
            의미합니다.
          </Typography>
        </li>
        <li>
          <Typography variant='b14' className='mb-2'>
            "회원"이라 함은 회사의 "서비스"에 접속하여 본 약관에 따라 "회사"와
            이용계약을 체결하고 "회사"가 제공하는 "서비스"를 이용하는 고객을
            말합니다.
          </Typography>
        </li>
        <li>
          <Typography variant='b14' className='mb-2'>
            "아이디(ID)"라 함은 "회원"의 식별과 "서비스" 이용을 위하여 "회원"이
            정하고 "회사"가 승인하는 문자와 숫자의 조합을 의미합니다.
          </Typography>
        </li>
        <li>
          <Typography variant='b14' className='mb-2'>
            "비밀번호"라 함은 "회원"이 부여받은 "아이디"와 일치되는 "회원"임을
            확인하고 비밀보호를 위해 "회원" 자신이 정한 문자 또는 숫자의 조합을
            의미합니다.
          </Typography>
        </li>
        <li>
          <Typography variant='b14' className='mb-2'>
            "게시물"이라 함은 "회원"이 "서비스"를 이용함에 있어 "서비스"상에
            게시한 부호, 문자, 음성, 음향, 화상, 동영상 등의 정보 형태의 글,
            사진, 동영상 및 각종 파일과 링크 등을 의미하며, 롤링페이퍼 및
            메시지를 포함합니다.
          </Typography>
        </li>
        <li>
          <Typography variant='b14' className='mb-2'>
            "롤링페이퍼"라 함은 "회원"이 "서비스" 내에서 생성하여 메시지를
            수집하는 디지털 공간을 의미합니다.
          </Typography>
        </li>
        <li>
          <Typography variant='b14' className='mb-2'>
            "메시지"라 함은 "회원"이 "롤링페이퍼"에 작성하는 글 등의 콘텐츠를
            의미합니다.
          </Typography>
        </li>
        <li>
          <Typography variant='b14' className='mb-2'>
            "굿즈 제작 서비스"라 함은 온라인 롤링페이퍼의 내용을 바탕으로 필름
            롤 형태의 실물 굿즈를 제작하고 배송하는 유료 서비스를 의미합니다.
          </Typography>
        </li>
      </ul>
      <Typography variant='b18-bold' className='mt-6 mb-2'>
        제3조 (회사 정보)
      </Typography>
      <ul className='mb-4'>
        <li>
          <Typography variant='b14'>회사명: 팀 '시리우스'</Typography>
        </li>
        <li>대표자: 손영호</li>
        <li>사업자등록번호: [사업자등록번호]</li>
        <li>주소: 서울 광진구 능동로 195-16 613호</li>
        <li>대표 전화: 010-1234-5678</li>
        <li>대표 이메일: son@naver.com</li>
        <li>통신판매업신고번호: [통신판매업신고번호]</li>
      </ul>
      <Typography variant='b18-bold' className='mt-6 mb-2'>
        제4조 (약관의 게시와 개정)
      </Typography>
      <Typography variant='b14' className='mb-2'>
        ① 회사는 본 약관의 내용을 회원이 쉽게 알 수 있도록 개인 정보 화면에
        게시합니다.
      </Typography>
      <Typography variant='b14' className='mb-2'>
        ② 회사는 「약관의 규제에 관한 법률」, 「정보통신망 이용촉진 및 정보보호
        등에 관한 법률」, 「전자상거래 등에서의 소비자보호에 관한 법률」 등 관련
        법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.
      </Typography>
      <Typography variant='b14' className='mb-2'>
        ③ 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여
        현행약관과 함께 그 적용일자 7일 전부터 서비스 초기 화면 또는 연결 화면을
        통해 공지합니다. 다만, 회원에게 불리하거나 중요한 내용의 변경인 경우에는
        30일 이전에 공지하고, 개정약관 공지 시 회원이 개정약관에 동의하지
        않는다는 명시적인 의사표시를 하지 않는 경우 개정약관에 동의한 것으로
        봅니다.
      </Typography>
      <Typography variant='b14' className='mb-4'>
        ④ 회원이 개정약관의 적용에 동의하지 않는 경우, 회사는 개정약관의 내용을
        적용할 수 없으며, 이 경우 회원은 이용계약을 해지할 수 있습니다. 다만,
        기존 약관을 적용할 수 없는 특별한 사정이 있는 경우에는 회사는 이용계약을
        해지할 수 있습니다.
      </Typography>
      <Typography variant='b18-bold' className='mt-6 mb-2'>
        제5조 (이용계약 체결 및 회원 가입 조건)
      </Typography>
      <Typography variant='b14' className='mb-2'>
        ① 이용계약은 "회원"이 되고자 하는 자가 본 약관의 내용에 동의하고, 회사가
        정한 회원가입 양식에 따라 아이디, 비밀번호, 이름, 휴대전화번호, 이메일
        등 필수 정보를 기재하여 회원가입 신청을 하며, "회사"가 이러한 신청에
        대하여 승낙함으로써 체결됩니다.
      </Typography>
      <Typography variant='b14' className='mb-2'>
        ② 회사는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않거나 사후에
        이용계약을 해지할 수 있습니다.
      </Typography>
      <ul className='pl-5 mb-4'>
        <li>
          <Typography variant='b14' className='mb-2'>
            가입신청자가 본 약관에 의하여 이전에 회원자격을 상실한 적이 있는
            경우. 다만, 회원자격 상실 후 회사의 회원 재가입 승낙을 얻은 경우에는
            예외로 합니다.
          </Typography>
        </li>
        <li>
          <Typography variant='b14' className='mb-2'>
            허위의 정보를 기재하거나, 회사가 제시하는 내용을 기재하지 않은 경우
          </Typography>
        </li>
        <li>
          <Typography variant='b14' className='mb-2'>
            타인의 명의를 도용하는 등 법령을 위반하여 신청하는 경우
          </Typography>
        </li>
        <li>
          <Typography variant='b14' className='mb-2'>
            사회의 안녕과 질서 또는 미풍양속을 저해할 목적으로 신청한 경우
          </Typography>
        </li>
        <li>
          <Typography variant='b14' className='mb-2'>
            기타 본 약관에 위배되거나 위법 또는 부당한 이용신청임이 확인된 경우
          </Typography>
        </li>
      </ul>
      <Typography variant='b18-bold' className='mt-6 mb-2'>
        제6조 (개인정보보호 의무)
      </Typography>
      <Typography variant='b14' className='mb-'>
        회사는 「개인정보보호법」 등 관계 법령이 정하는 바에 따라 회원의
        개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및 사용에 대해서는
        관련 법령 및 회사의 개인정보 처리방침이 적용됩니다.
      </Typography>
      <Typography variant='b18-bold' className='mt-6 mb-2'>
        제7조 (회원의 의무)
      </Typography>
      <Typography variant='b14' className='mb-2'>
        ① 회원은 다음 행위를 하여서는 안 됩니다.
      </Typography>
      <p className='mb-2'></p>
      <ul className=' pl-5 mb-4'>
        <li>신청 또는 변경 시 허위 내용의 등록</li>
        <li>타인의 정보 도용</li>
        <li>회사가 게시한 정보의 변경</li>
        <li>
          회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시
        </li>
        <li>회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
        <li>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
        <li>
          외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를
          서비스에 공개 또는 게시하는 행위
        </li>
        <li>
          회사의 동의 없이 영리 목적의 광고성 정보를 전송하거나 기타 불법적인
          영업 활동을 하는 행위
        </li>
        <li>기타 불법적이거나 부당한 행위</li>
      </ul>
      <Typography variant='b14' className='mb-4'>
        ② 회원은 관계 법령, 본 약관의 규정, 이용안내 및 서비스와 관련하여 공지한
        주의사항 등을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를
        하여서는 안 됩니다.
      </Typography>
      <Typography variant='b18-bold' className='mt-6 mb-2'>
        제8조 (서비스의 제공 등)
      </Typography>
      <Typography variant='b14' className='mb-2'>
        ① 회사는 회원에게 아래와 같은 서비스를 제공합니다.
      </Typography>
      <ul className='pl-5 mb-4'>
        <li>
          <Typography variant='b14' className='mb-2'>
            롤링페이퍼 생성 및 관리: 회원이 자신만의 롤링페이퍼를 생성하고, 해당
            롤링페이퍼에 작성된 메시지를 관리(삭제, 신고 관리)하는 기능
          </Typography>
        </li>
        <li>
          <Typography variant='b14' className='mb-2'>
            메시지 작성: 다른 회원의 롤링페이퍼에 메시지(내용, 글씨체 선택,
            배경색 선택 포함)를 작성하는 기능
          </Typography>
        </li>
        <li>
          <Typography variant='b14' className='mb-2'>
            타임캡슐 기능: 롤링페이퍼의 공개일을 설정하여 특정 시점까지 메시지를
            비공개로 유지하는 기능
          </Typography>
        </li>
        <li>
          <Typography variant='b14' className='mb-2'>
            커스터마이징 기능: 롤링페이퍼 메시지 작성 시 글씨체 및 배경 색상을
            선택하는 기능
          </Typography>
        </li>
        <li>
          {' '}
          <Typography variant='b14' className='mb-2'>
            {' '}
            굿즈 제작 연동 서비스: 온라인 롤링페이퍼를 필름 롤 형태의 실물
            굿즈로 제작 신청하는 기능 (유료)
          </Typography>
        </li>
        <li>
          {' '}
          <Typography variant='b14' className='mb-2'>
            {' '}
            기타 회사가 추가 개발하거나 다른 회사와의 제휴계약 등을 통해
            회원에게 제공하는 일체의 서비스
          </Typography>
        </li>
      </ul>{' '}
      <Typography variant='b14' className='mb-2'>
        {' '}
        ② 서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.
      </Typography>
      <Typography variant='b14' className='mb-4'>
        {' '}
        ③ 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절 또는
        운영상 상당한 이유가 있는 경우 서비스의 제공을 일시적으로 중단할 수
        있습니다. 이 경우 회사는 제4조에 정한 방법으로 회원에게 통지합니다.
      </Typography>
      <Typography variant='b18-bold' className='mt-6 mb-2'>
        제9조 (유료 서비스 및 결제)
      </Typography>
      <Typography variant='b14' className='mb-2'>
        {' '}
        ① 회사는 굿즈 제작 서비스를 유료로 제공합니다. 유료 서비스의 내용 및
        가격은 서비스 내 별도로 고지합니다.
      </Typography>
      <Typography variant='b14' className='mb-2'>
        {' '}
        ② 회원은 유료 서비스를 이용하기 위해 회사가 정한 결제 방법을 통해 결제를
        진행해야 합니다. 회사는 카드 결제, 계좌 이체 등의 결제 방식을
        제공합니다.
      </Typography>
      <Typography variant='b14' className='mb-2'>
        {' '}
        ③ 결제와 관련하여 회원이 입력한 정보 및 그 정보와 관련하여 발생한 책임은
        전적으로 회원에게 있습니다.
      </Typography>
      <Typography variant='b18-bold' className='mt-6 mb-2'>
        제10조 (유료 서비스 환불 규정)
      </Typography>{' '}
      <Typography variant='b14' className='mb-2'>
        {' '}
        ① 회원의 귀책사유로 인한 굿즈 제작 서비스의 환불은 다음과 같은 경우에
        불가합니다.
      </Typography>
      <ul className='pl-5 mb-4'>
        <li>
          {' '}
          <Typography variant='b14' className='mb-2'>
            {' '}
            제작된 굿즈의 포장지를 훼손하거나 개봉하여 상품 가치가 현저히 감소한
            경우
          </Typography>
        </li>
        <li>
          {' '}
          <Typography variant='b14' className='mb-2'>
            {' '}
            회원의 단순 변심으로 인한 요청이 아닌, 굿즈 자체의 하자가 아닌 경우
            (예: 메시지 내용 오타, 디자인 선택 착오 등)
          </Typography>
        </li>
      </ul>{' '}
      <Typography variant='b14' className='mb-2'>
        {' '}
        ② 굿즈 자체에 하자가 발생한 경우, 회사는 이를 확인 후 환불 또는 교환을
        진행합니다.
      </Typography>
      <Typography variant='b14' className='mb-2'>
        {' '}
        ③ 환불에 필요한 제반 비용(수수료 등)은 회원의 귀책사유로 인한 환불 시
        회원이 부담할 수 있습니다.
      </Typography>
      <Typography variant='b18-bold' className='mt-6 mb-2'>
        제11조 (게시물의 관리 및 저작권)
      </Typography>{' '}
      <Typography variant='b14' className='mb-2'>
        {' '}
        ① 회원이 "서비스" 내에 게시한 "게시물"(메시지, 롤링페이퍼 등)의 저작권은{' '}
        <strong>회사(팀 '시리우스')</strong>에 귀속됩니다.
      </Typography>
      <Typography variant='b14' className='mb-2'>
        {' '}
        ② 회사는 서비스 운영 및 개선, 통계, 홍보, 신규 서비스 개발 등의 목적으로
        회원의 "게시물"을 비식별화된 형태로 활용할 수 있습니다. 단, 회원의
        개인정보와 연동되는 형태로 활용하거나, 회원의 식별이 가능한 형태로
        활용할 시에는 별도의 동의를 받습니다.
      </Typography>
      <Typography variant='b14' className='mb-2'>
        {' '}
        ③ 회원의 "게시물"이 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」,
        「저작권법」 등 관련 법령을 위반하거나, 사회의 미풍양속을 저해한다고
        판단되는 경우, 해당 "게시물"에 대한 신고가 들어오는 즉시 비공개
        처리됩니다.
      </Typography>
      <Typography variant='b14' className='mb-2'>
        {' '}
        ④ 제3항에 따라 비공개 처리된 게시물에 대해 회원이 이메일([대표 이메일
        주소])로 문의하면, 회사는 적절한 심사 조치 후에 비공개 해제 여부를
        결정합니다.
      </Typography>
      <Typography variant='b14' className='mb-2'>
        {' '}
        ⑤ 회원은 자신의 "게시물"이 타인의 권리를 침해하지 않도록 유의해야 하며,
        타인의 권리 침해로 인한 법적 분쟁 발생 시 모든 책임은 해당 "게시물"을
        작성한 "회원"에게 있습니다.
      </Typography>
      <Typography variant='b18-bold' className='mt-6 mb-2'>
        제12조 (이용계약 해지 및 서비스 이용 제한)
      </Typography>
      <Typography variant='b14' className='mb-2'>
        {' '}
        ① "회원"은 언제든지 "서비스" 내 마이페이지 또는 개인정보 보호책임자에게
        연락하여 이용계약 해지(회원 탈퇴) 신청을 할 수 있으며, "회사"는 관련
        법령이 정하는 바에 따라 이를 즉시 처리하여야 합니다.
      </Typography>
      <Typography variant='b14' className='mb-2'>
        {' '}
        ② "회원"이 이용계약을 해지할 경우, 회원의 모든 개인정보 및 롤링페이퍼,
        작성된 메시지를 포함한 데이터는 즉시 삭제됩니다.
      </Typography>
      <Typography variant='b14' className='mb-2'>
        {' '}
        ③ 회사는 회원이 본 약관의 의무를 위반하거나 서비스의 정상적인 운영을
        방해하는 경우, 경고, 일시 정지, 영구 이용 정지 등으로 서비스 이용을
        단계적으로 제한할 수 있습니다.
      </Typography>
      <Typography variant='b14' className='mb-2'>
        {' '}
        ④ 제3항의 제재 조치에 대해 회원이 이메일(son@naver.com)로 문의하면,
        회사는 적절한 심사 조치 후에 이용 제한 해제 여부를 결정합니다.
      </Typography>
      <Typography variant='b18-bold' className='mt-6 mb-2'>
        제13조 (책임 제한)
      </Typography>
      <Typography variant='b14' className='mb-2'>
        ① 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할
        수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
      </Typography>
      <Typography variant='b14' className='mb-2'>
        ② 회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을
        지지 않습니다. (예: 회원의 네트워크 환경 불안정, 기기 고장, 비밀번호
        유출 등)
      </Typography>
      <Typography variant='b14' className='mb-2'>
        ③ 회사는 회원이 서비스와 관련하여 게재한 정보, 자료, 사실의 신뢰도,
        정확성 등의 내용에 관하여는 책임을 지지 않습니다. 회원은 자신의 판단과
        책임 하에 게시물을 작성하고 이용해야 합니다.
      </Typography>
      <Typography variant='b14' className='mb-2'>
        ④ 회사는 회원 상호간 또는 회원과 제3자 상호간에 서비스를 매개로 하여
        발생한 분쟁에 대하여 개입할 의무가 없으며, 이로 인한 손해를 배상할
        책임이 없습니다.
      </Typography>
      <Typography variant='b18-bold' className='mt-6 mb-2'>
        제14조 (청소년 보호)
      </Typography>
      <Typography variant='b14' className='mb-4'>
        본 서비스는 청소년 유해 매체물로 분류되지 않습니다. 다만, 회사는
        「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 및 「청소년
        보호법」에 따라 청소년 유해 콘텐츠가 서비스 내에 유포되지 않도록
        노력하며, 해당 콘텐츠 발견 시 즉시 비공개 및 삭제 등의 조치를 취합니다.
      </Typography>
      <Typography variant='b18-bold' className='mt-6 mb-2'>
        제15조 (분쟁 해결)
      </Typography>
      <Typography variant='b14' className='mb-2'>
        ① 본 약관의 해석 및 회사와 회원 간의 분쟁에 대하여는 대한민국 법률이
        적용됩니다.
      </Typography>
      <Typography variant='b14' className='mb-2'>
        ② 서비스 이용 중 발생한 회원과 회사 간의 분쟁은 소송 제기 전 원만한
        해결을 위해 노력합니다.
      </Typography>
      <Typography variant='b14' className='mb-2'>
        ③ 분쟁이 발생하여 소송이 제기될 경우, 서울동부지방법원을 전속 관할
        법원으로 합니다.
      </Typography>
      <Typography variant='b18-bold' className='mt-6 mb-2'>
        부칙
      </Typography>
      <Typography variant='b14' className='mb-4'>
        본 약관은 2025년 06월 14일부터 적용됩니다.
      </Typography>
    </div>
  );
};

export default TermsOfServiceContent;
