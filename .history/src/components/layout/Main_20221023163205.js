import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";
import Header from "./Header";

const Main = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
