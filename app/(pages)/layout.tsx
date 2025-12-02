import React, { ReactNode } from "react";
import { Navbar01 } from "../components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar01 />
      {children}
    </div>
  );
};

export default Layout;
