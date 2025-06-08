// 자체 서비스 회원가입 POST /auth/register
export interface RegisterRequest {
  id: string;
  password: string;
  name: string;
  phone: string;
  email: string;
}

// 소셜 회원가입 POST /auth/oauth/register
export interface OAuthRegisterRequest {
  name: string;
  phone: string;
  email: string;
  socialId: string;
  socialType: string;
}

// 이메일 인증 코드 검증 POST /auth/email/verify-code
export interface EmailCodeVerifyRequest {
  email: string;
  code: string;
}

// 이메일 인증 코드 전송 POST /auth/email/send-code
export interface EmailCodeSendRequest {
  email: string;
}

// 휴대폰 번호 중복 검증 요청 POST /auth/check-phone
export interface PhoneCheckRequest {
  phone: string;
}

// 아이디 중복 확인 POST /auth/check-id
export interface IdCheckRequest {
  id: string;
}

// 이메일 중복 확인 POST /auth/check-email
export interface EmailCheckRequest {
  email: string;
}

// 로그인
export interface LoginRequest {
  id: string;
  password: string;
}

export interface LoginSuccessData {
  userId: number;
  role: string;
}

export interface ApiResponseLoginSuccess {
  data: LoginSuccessData;
  status: number;
  message: string;
}

export interface LoginFailureResponse {
  data: null;
  code: string;
  message: string;
}

// 로그아웃
export interface LogoutResponse {
  data: null;
  status: number;
  message: string;
}
