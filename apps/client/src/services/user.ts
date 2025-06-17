import { EditProfileInputForm } from "@/interface/my-page/edit-profile/edit.interface";
import { MyInfoResponse } from "@/types/user";
import { apiClient } from "./apiClient";

export const getUserInfo = () => {
  return apiClient.get<MyInfoResponse>("/user/info");
};

export const patchUserInfo = (data: EditProfileInputForm) => {
  return apiClient.patch("/user/info", data);
};
