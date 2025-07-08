// 사용자 정보 검증 POST /auth/validate/user/info
export interface UserInfoIdCheckRequest {
  phone: string;
  email: string;
}

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

// 아이디 찾기 /auth/find/id
export interface UserLoginIdResponse {
  id: string;
}

// 자체 로그인 POST /auth/login
export interface LoginRequest {
  id: string;
  password: string;
}

export interface LoginSuccessResponse {
  userId: number;
  role: role;
  accessToken: string;
  refreshToken: string;
}

export interface FailureResponse {
  code: string;
}

export interface SocialRegisterResponse {
  socialId: string;
}

export interface ReissueTokenRequest {
  refreshToken: string;
}

export interface Token {
  accessToken: string;
  refreshToken: string;
}

export interface ValidateUserInfoRequest {
  name: string;
  phone: string;
  email: string;
}

export interface ValidatePasswordInfoRequest {
  id: string;
  email: string;
}
