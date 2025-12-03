"use client";

import { create } from "zustand";

export const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
};

const setCookie = (name: string, value: string, days = 7) => {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

const deleteCookie = (name: string) => {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};

interface AuthState {
  isLogin: boolean;
  setIsLogin: () => void;
  setLogout: () => void;
}

const useAuth = create<AuthState>((set) => {
  const cookieValue = getCookie("isLogin") === "true";

  return {
    isLogin: cookieValue,

    setIsLogin: () => {
      set({ isLogin: true });
      setCookie("isLogin", "true");
    },

    setLogout: () => {
      set({ isLogin: false });
      deleteCookie("isLogin");
    },
  };
});

export default useAuth;
