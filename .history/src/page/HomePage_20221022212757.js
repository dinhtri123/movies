import React from "react";
import Banner from "../components/banner/Banner";
import styled from "styled-components";
import Heading from "../components/heading/Heading";
import MovieCard from "../components/movie/MovieCard";
import MovieList from "../components/movie/MovieList";

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
            <Heading>Coming soon</Heading>
            <div className="card">
              <MovieList></MovieList>
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
