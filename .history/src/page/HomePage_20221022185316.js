import React from "react";
import Banner from "../components/banner/Banner";
import styled from "styled-components"

const HomePageStyles = styled.div``
const HomePage = () => {
  return (
    <>
      <Banner></Banner>
      <div className="trailers">
        <h2>New Trailers</h2>

      </div>
    </>
  );
};

export default HomePage;
