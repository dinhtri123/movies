import React from "react";
import Banner from "../components/banner/Banner";
import styled from "styled-components";

const HomePageStyles = styled.div`

`;
const HomePage = () => {
  return (
    <HomePageStyles>
      <Banner></Banner>
      .main
      <div className="trailers">
        <h2>New Trailers</h2>
      </div>
    </HomePageStyles>
  );
};

export default HomePage;
