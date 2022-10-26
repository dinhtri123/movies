import React from "react";
import Banner from "../components/banner/Banner";
import styled from "styled-components";

const HomePageStyles = styled.div`
.main-content{
  width: 100%;
  
}
`;
const HomePage = () => {
  return (
    <HomePageStyles>
      <Banner></Banner>
      <div className="main-content">
        <div className="trailers">
          <h2>New Trailers</h2>

        </div>
        <div className="content"></div>
      </div>
    </HomePageStyles>
  );
};

export default HomePage;
