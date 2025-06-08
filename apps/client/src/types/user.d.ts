export interface User {
  id: string;
  name: string;
}

export interface UpdateUserInfoRequest {
  name: string;
  password: string;
}
