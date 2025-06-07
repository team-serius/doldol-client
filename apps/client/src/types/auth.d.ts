
export interface RegisterRequest{
  id:string;
  password:string;
  name:string;
  phone:string;
  email:string;
}

export interface AuthRegisterRequest{
  name:string;
  phone:string;
  email:string;
  socialId:string;
  socialType:string;
}

export interface EmailCodeVerifyRequest{
  email:string;
  code:string;
}


export interface EmailCodeSendRequest{
  email:string;
}

export interface PhoneCheckRequest{
  phone:string;
}

export interface IdCheckRequest{
  id:string;
}

export interface EmailCheckRequest{
  email:string;
}