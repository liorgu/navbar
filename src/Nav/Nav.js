import React from "react";
import NavProvider from "./NavProvider";

const Nav = ({ children }) => {
  return <NavProvider>{children}</NavProvider>;
};

export default Nav;
