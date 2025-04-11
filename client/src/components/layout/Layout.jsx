import React, { Fragment } from "react";
import { Header } from "./header";
import { Outlet } from "react-router-dom";



const Layout = () => {
  return (
    <Fragment>
      <Header></Header>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Layout;