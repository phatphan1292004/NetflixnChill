import React, { Fragment } from "react";
import { Header } from "./header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";



const Layout = () => {
  return (
    <Fragment>
      <Header></Header>
          <Outlet></Outlet>
      <Footer></Footer>
    </Fragment>
  );
};

export default Layout;