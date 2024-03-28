import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IUserState {
  isLogin: boolean;
  name: string;
  profileUrl: string;
  login: (name: string, profileUrl: string) => void;
  logout: () => void;
}

const userStore = create(
  persist<IUserState>(
    set => ({
      isLogin: false,
      name: '',
      profileUrl: '',
      login: (name, profileUrl) => set({ isLogin: true, name: name, profileUrl: profileUrl }),
      logout: () => set({ isLogin: false, name: '', profileUrl: '' }),
    }),
    {
      name: 'PREVIEW_USER_STORE',
    },
  ),
);

export default userStore;