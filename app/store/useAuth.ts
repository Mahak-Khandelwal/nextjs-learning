import { create } from "zustand";

interface AuthState {
  isLogin: boolean;
  setIsLogin: () => void;
  setLogout: () => void;
}

const useAuth = create<AuthState>((set) => ({
  isLogin: false,
  setIsLogin: () => set({ isLogin: true }),
  setLogout: () => set({ isLogin: false }),
}));

export default useAuth;
