import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../banner/Banner";

const Main = () => {
  return (
    <>
      <Banner></Banner>
      <Outlet></Outlet>
    </>
  );
};

export default Main;
