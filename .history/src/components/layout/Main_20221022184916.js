import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../banner/Banner";
import Header from "./Header";

const Main = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default Main;
