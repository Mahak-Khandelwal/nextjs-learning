// components/RequireAuth.tsx
"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import useAuth from "@/app/store/useAuth";
import MyLoader from "../custom/loader";

interface RequireAuthProps {
  children: React.ReactNode;
}

const Routes = [
  {
    path: "/todo",
    isProtected: true,
  },
  {
    path: "/",
    isProtected: true,
  },
  {
    path: "/about",
    isPublic: true,
  },
  {
    path: "/login",
    isAuthentication: true,
  },
  {
    path: "/signup",
    isAuthentication: true,
  },
];

export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const { isLogin } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const [checkingRoute, setCheckingRoute] = useState(true);

  const currentRoute = Routes.find((item) => item.path === pathname);

  useEffect(() => {
    // no route config → treat as public and stop checking
    if (!currentRoute) {
      setCheckingRoute(false);
      return;
    }

    // 🔒 Protected route & not logged in → go to login
    if (currentRoute.isProtected && !isLogin) {
      router.replace("/login");
      return; // keep checkingRoute = true while redirecting
    }

    // 🔐 Auth route (/login, /signup) & already logged in → go to home
    if (currentRoute.isAuthentication && isLogin) {
      router.replace("/");
      return; // keep checkingRoute = true while redirecting
    }

    // ✅ No redirect needed → show children
    setCheckingRoute(false);
  }, [currentRoute, isLogin, router]);

  // While we are deciding / redirecting, show loader (same on server & client)
  if (checkingRoute) {
    return (
      <div className="flex w-[90vw] h-[90vh] justify-center items-center">
        <MyLoader />
      </div>
    );
  }

  // Reached only when route is allowed for current auth state
  return <>{children}</>;
};
