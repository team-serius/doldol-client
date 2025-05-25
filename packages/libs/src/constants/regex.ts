export const USERNAME_REGEX = /^[a-zA-Z0-9-_]{2,15}$/;
export const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,}$/;
export const PHONE_REGEX = /^(\d{2,3})(\d{3,4})(\d{4})$/;
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const UUID_REGEX =
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89ABab][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
export const VERIFY_CODE_REGEX = /^\d{6}$/;
export const SPECIAL_CHARACTER_REGEX = /[!@#$%^&*(),.?":;\[\]{}|<>]/;
export const REGISTER_USERNAME_REGEX = /[^a-zA-Z0-9]/g;
export const REGISTER_PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
export const NUMBER_ONLY_REGEX = /^[0-9]*$/;
export const ACCOUNT_NUMBER_REGEX = /^(\d{1,})(-(\d{1,})){1,}$/;
export const REGISTRATION_NUMBER_REGEX =
  /^\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])[-]*[1-4]\d{6}$/;
export const BUSINESS_NUMBER_REGEX = /^[0-9]{3}-[0-9]{2}-[0-9]{5}$/;
