import { User } from 'src/types/user';
import { create } from 'zustand';

interface AuthStore {
  user: User | null;
  setUserData: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUserData: (user) => set({ user }),
}));
