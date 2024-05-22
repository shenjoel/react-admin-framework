import { create } from 'zustand';

export type TAuthStore = {
  isCompleted: boolean;
  isAuthenticated: boolean;
  authenticate: () => void;
  signOut: () => void;
};

const isAuthenticated = sessionStorage.getItem('isAuthenticated');

const useAuthStore = create<TAuthStore>()((set) => {
  return {
    isAuthenticated: !!isAuthenticated,
    isCompleted: false,
    authenticate: () => {
      sessionStorage.setItem('isAuthenticated', 'isAuthenticated');
      set(() => ({
        isAuthenticated: true,
        isCompleted: true,
      }));
    },
    signOut: () => {
      sessionStorage.removeItem('isAuthenticated');
      set(() => ({
        isAuthenticated: false,
        isCompleted: false,
      }));
    },
  };
});

export { useAuthStore };
