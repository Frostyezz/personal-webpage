import React from "react";

import Navbar from "./Navbar";

const Layout = ({ children, lang, setEn, setRo }) => {
  return (
    <>
      <Navbar lang={lang} setEn={() => setEn()} setRo={() => setRo()} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
