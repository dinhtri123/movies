import React from "react";
import Banner from "../components/banner/Banner";
import styled from "styled-components";
import Heading from "../components/heading/Heading";

const HomePageStyles = styled.div`
  padding-bottom: 60px;
  .main-content {
    width: 100%;
    display: flex;
    gap: 0px 50px;
  }
  .trailers {
    max-width: 300px;
    width: 100%;
  }
  .card {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
  }
  .image {
    position: absolute;
    inset: 0;
    z-index: -1;
  }
  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.2);
  }
  img {
    object-fit: cover;
  }
  .card-item {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 10px;
    overflow: hidden;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    align-items: center;
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: inherit;
      backdrop-filter: blur(3px);
      box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.1);
      z-index: -1;
    }
  }
  .item {
    display: flex;
    flex-direction: column;
    padding: 0px 5px;
    line-height: 1.3;
    &-title {
      font-weight: 500;
    }
    &-since {
      font-size: 12px;
    }
  }
  .star {
    display: flex;
    gap: 5px;
  }
  .number {
    font-size: 16px;
  }
  .icon-star {
    width: 20px;
    height: 20px;
  }
  ////////
  .content {
    padding-left: 20px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
`;
const HomePage = () => {
  return (
    <HomePageStyles>
      <div className="container">
        <Banner></Banner>
        <div className="main-content">
          <div className="trailers">
            <Heading>New trailers</Heading>
            <div className="card">
              <MovieCard></MovieCard>
            </div>
          </div>
          <div className="content">
            <div className="popular">
              <Heading>Popular Movie</Heading>
            </div>
          </div>
        </div>
      </div>
    </HomePageStyles>
  );
};

export default HomePage;
