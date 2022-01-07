import React from "react";
import Navbar from "./navbar";

export interface layoutProps {
  children: () => JSX.Element;
}

const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
