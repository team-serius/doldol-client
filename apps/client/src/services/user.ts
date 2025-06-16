import { MyInfoResponse } from "@/types/user";
import { apiClient } from "./apiClient";
import { EditProfileInputForm } from "@/interface/my-page/edit-profile/edit.interface";

export const getUserInfo = () => {
  return apiClient.get<MyInfoResponse>("/user/info");
};

export const patchUserInfo = (data: EditProfileInputForm) => {
  return apiClient.patch("/user/info", data);
};
