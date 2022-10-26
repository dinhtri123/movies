import React from "react";
import Banner from "../components/banner/Banner";
import styled from "styled-components";
import Heading from "../components/heading/Heading";
import MovieList from "../components/movie/MovieList";

const HomePageStyles = styled.div`
  padding-bottom: 60px;
  .main-content {
    width: 100%;
    display: flex;
    gap: 0px 40px;
  }
  .trailers {
    max-width: 300px;
    width: 100%;
  }
  .card {
    width: 100%;
    height: 100%;
  }
  ////////
  .content {
    flex: 1;
    padding-left: 40px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
  .heading-top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:3
    &-right {
      display: flex;
      gap: 15px;
      .dot {
        width: 1px;
        height: 30px;
        background: rgba(255, 255, 255, 0.3);
      }
    }
  }
`;
const HomePage = () => {
  return (
    <HomePageStyles>
      <div className="container">
        <Banner></Banner>
        <div className="main-content">
          <div className="trailers">
            <Heading>Coming soon</Heading>
            <div className="card">
              <MovieList type={"upcoming"}></MovieList>
            </div>
          </div>
          <div className="content">
            <div className="popular">
              <div className="heading-top">
                <div className="heading-top-right">
                  <Heading>Popular Movie</Heading>
                  <span className="dot"></span>
                  <span className="number">4 Movies</span>
                </div>
                <button type="submit">All movies</button>
              </div>

              <div className="card">
                <MovieList type={"popular"}></MovieList>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomePageStyles>
  );
};

export default HomePage;
