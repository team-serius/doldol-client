export interface RegisterForm {
  id: string;
  idCheck: boolean;
  password: string;
  passwordConfirm: string;
  name: string;
  phone: string;
  email: string;
  termsOfUse: boolean;
  privacyPolicy: boolean;
  isOlderThan14: boolean;
}

export interface RegisterEmailCodeForm {
  email: string;
  code: string;
}

export interface RegisterSocialForm {
  socialId: string;
  socialType: string;
  name: string;
  phone: string;
  email: string;
  termsOfUse: boolean;
  privacyPolicy: boolean;
  isOlderThan14: boolean;
}
