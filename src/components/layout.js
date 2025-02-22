import React from "react";
import { Helmet } from "react-helmet";
import GlobalStyle from "../styles/GlobalStyle";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Sisterhood Supplies</title>
      </Helmet>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Layout;