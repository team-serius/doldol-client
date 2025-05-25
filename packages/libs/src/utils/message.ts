export const ERROR_MESSAGES = {
  /** 로그인 */
  usernameRequired: '이메일을 입력해주세요.',
  passwordRequired: '비밀번호를 입력해주세요.',

  /** 회원가입 */
  emailInvalid: '이메일 형식이 올바르지 않습니다.',
  duplicateEmail: '이미 존재하는 회원입니다.',
  passwordInvalid: '비밀번호는 8~16자의 영문, 숫자, 특수문자를 포함해야 합니다.',
  passwordConfirmInvalid: '비밀번호가 일치하지 않습니다.',
  phoneNumberInvalid: '번호는 - 를 뺀 01012341234로 입력해주세요.',
  phoneNumberRequired: '휴대전화 번호를 입력해주세요.',
  phoneNumberResponseFailed: '휴대전화 인증번호가 틀렸습니다.',
  phoneNumberCodeInvalid: '휴대전화 인증번호는 6자리의 숫자입니다.',

  /** 비밀번호 변경 */
  passwordCheckInvalid: '비밀번호 양식이 올바르지 않거나, 비밀번호가 일치하지 않습니다.',
  emailCheckInvalid: '존재하는 아이디가 없습니다.',
  emailPhoneNumberNotMatched: '이메일과 휴대전화 번호가 일치하지 않습니다.',

  /** 기타 */
  blockRecirect: '작성하신 내용이 저장되지 않았습니다. 이 페이지를 떠나시겠습니까?',

  /** 권한 에러 */
  unauthorized: '로그인이 필요합니다.',
  forbidden: '접근 권한이 없습니다.',
  musicianForbidden: '뮤지션 회원만 이용 가능합니다.',

  /** 아티스트 등록 */
  artistNameRequired: '활동명은 필수 항목입니다.',
  artistNameLength: '활동명은 1자 이상 20자 이하로 입력해주세요.',
  workUrlRequired: '최소 한 개 이상의 작업물 URL은 필수 항목입니다.',
  workUrlLength: '작업물 URL은 최대 5개까지 추가 가능합니다.',

  /** 계좌번호 등록 관련 */
  bankNameRequired: '은행명은 필수로 선택해야합니다.',
  bankAccountRequired: '계좌번호는 필수로 입력해야합니다.',
  bankAccountInvalid: '계좌번호는 -를 포함한 숫자만 입력 가능합니다.',
  bankAccountOwnerNameRequired: '예금주는 필수로 입력해야합니다.',

  /** 인증정보 입력 관련 */
  personalNameRequired: '이름은 필수로 입력해야합니다.',
  registrationNumberRequired: '주민등록번호는 필수로 입력해야합니다.',
  registrationNumberInvalid: '주민등록번호 양식이 올바르지 않습니다.',
  businessNameRequired: '상호명은 필수로 입력해야합니다.',
  ownerNameRequired: '대표자 이름은 필수로 입력해야합니다.',
  businessNumberRequired: '사업자등록번호는 필수로 입력해야합니다.',
  businessNumberInvalid: '000-00-00000 양식으로 입력해야합니다.',

  /** 판매글 등록 관련 */
  titleRequired: '제목은 필수 항목입니다.',
  titleLength: '제목은 1자 이상 32자 이하로 입력해주세요.',
  priceRequired: '가격은 필수 항목입니다.',
  priceInvalid: '가격은 숫자만 입력 가능합니다.',
  priceMin: '가격은 100원 이상으로 입력해주세요.',
  priceUnitError: '가격은 100원 단위로 입력해주세요.',
  moodRequired: '분위기는 필수 항목입니다.',
  genreRequired: '장르는 필수 항목입니다.',
  exclusiveRequired: '판매 유형은 필수 항목입니다.',
  updateRequired: '수정 횟수는 필수 항목입니다.',
  updateInvalid: '수정 횟수는 숫자만 입력 가능합니다.',
  updateMin: '수정 횟수는 최소 0회 이상으로 입력해주세요.',
  periodRequired: '작업 기간은 필수 항목입니다.',
  periodInvalid: '작업 기간은 숫자만 입력 가능합니다.',
  periodMin: '작업 기간은 최소 1일 이상으로 입력해주세요.',
  draftRequired: '시안 개수는 필수 항목입니다.',
  draftInvalid: '시안 개수는 숫자만 입력 가능합니다.',
  draftMin: '시안 개수는 최소 1개 이상으로 입력해주세요.',
  providedFilesRequired: '제공 파일은 필수 항목입니다.',
  workFieldRequired: '작업 분야는 필수 항목입니다.',
  descriptionRequired: '서비스 설명은 필수 항목입니다.',
  studioNameRequired: '스튜디오 이름은 필수 항목입니다.',
  studioNameLength: '스튜디오 이름은 1자 이상 32자 이하로 입력해주세요.',
  reservationLinkRequired: '예약 링크는 필수 항목입니다.',
  regionRequired: '지역 설정은 필수 항목입니다.',
  engineerSupportRequired: '엔지니어 지원 여부는 필수 항목입니다.',
};

export const HELPER_MESSAGES = {
  /** 유저 관련 */
  userDeleteSuccess: '해당 회원이 탈퇴되었습니다.',

  /** Auth Form 관련 */
  emailValid: '사용 가능한 이메일입니다.',
  passwordValid: '사용 가능한 비밀번호입니다.',
  passwordConfirmValid: '비밀번호가 일치합니다.',

  /** 비밀번호 변경 */
  emailCheckValid: '이메일이 확인되었습니다.',
  passwordChangeSuccess: '비밀번호 변경이 완료되었습니다.',

  /** 본인 인증 */
  phoneNumberSended: '휴대전화 인증번호가 발송되었습니다.',
  phoneCheckValid: '휴대전화 인증이 완료되었습니다.',

  /** 로그인 */
  loginSuccess: '로그인 되었습니다.',
  logoutSuccess: '로그아웃 되었습니다.',
};
