import Image from "next/image";
import React, { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}

const layout = ({ children }:LayoutProps) => {
  return (
    <div className="flex w-full">
      <div className="w-1/2 hidden lg:flex">
        <Image
          src="https://plus.unsplash.com/premium_photo-1764177093378-dd86813fcdb6?q=80&w=735&auto=format&fit=crop"
          className="h-screen w-full object-cover"
          width={100}
          height={100}
          alt="Logo"
        />
      </div>

      <div className="flex justify-center lg:w-1/2 w-full h-screen items-center">
        {children}
      </div>
    </div>
  );
};

export default layout;
