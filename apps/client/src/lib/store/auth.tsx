import { MyInfoResponse } from "src/types/user";
import { create } from "zustand";

interface AuthStore {
  user: MyInfoResponse | null;
  setUserData: (user: MyInfoResponse | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUserData: (user) => set({ user }),
}));
