// 본인정보 조회 GET /user/info
export interface MyInfoResponse {
  name: string;
  phone: string;
  email: string;
  socialId: string;
  socialType: string;
}

// 개인정보 수정 PATCH /user/info
export interface UpdateUserInfoRequest {
  name: string;
  password: string;
}

export interface ApiResponseMyInfo {
  data: MyInfoResponse;
  status: number;
  message: string;
}
