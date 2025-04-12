import React, { Fragment } from "react";
import { Header } from "./header";
import Footer from "./footer/Footer";



const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header></Header>
      {children}
      <Footer></Footer>
    </Fragment>
  );
};

export default Layout;