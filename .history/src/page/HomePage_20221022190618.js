import React from "react";
import Banner from "../components/banner/Banner";
import styled from "styled-components";

const HomePageStyles = styled.div`
  .main-content {
    width: 100%;
    display: flex;
  }
`;
const HomePage = () => {
  return (
    <HomePageStyles>
      <div className="container">
        <Banner></Banner>
        <div className="main-content">
          <div className="trailers">
            <h2>New Trailers</h2>
            <div className="card">
              <img src="" alt="" />
            </div>
          </div>
          <div className="content">Content</div>
        </div>
      </div>
    </HomePageStyles>
  );
};

export default HomePage;
