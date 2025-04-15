import React, { Fragment } from "react";
import { Header } from "./header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";



const Layout = () => {
  return (
    <Fragment>
      <ToastContainer></ToastContainer>
      <Header></Header>
          <Outlet></Outlet>
      <Footer></Footer>
    </Fragment>
  );
};

export default Layout;