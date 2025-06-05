export interface RegisterForm {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phone: string;
  email: string;
  termsOfUse: boolean;
  privacyPolicy: boolean;
  isOlderThan14: boolean;
}
