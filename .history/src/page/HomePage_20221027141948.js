import React from "react";
import styled from "styled-components";
import Heading from "../components/heading/Heading";
import MovieList from "../components/movie/MovieList";
import Trailer from "../components/trailer/Trailer";

const HomePageStyles = styled.div`
  padding-bottom: 60px;
  .main-content {
    width: 100%;
    display: flex;
    gap: 0px 40px;
  }

  .card {
    width: 100%;
  }
  ////////
  .content {
    flex: 1;
    padding-left: 40px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
  .popular {
    margin-bottom: 40px;
  }
  .heading-top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    .heading {
      margin-bottom: 0;
    }
    &-right {
      display: flex;
      align-items: center;
      gap: 15px;
    }
  }
  .rate {
    margin-bottom: 40px;
  }
  .favourite {
    margin-top: 40px;
  }
  .genres {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    span {
      padding: 8px 15px;
      border-radius: 10px;
      &:nth-child(1) {
        background: #937dc2;
      }
      &:nth-child(2) {
        background: #f96666;
      }
      &:nth-child(3) {
        background: #d58bdd;
      }
      &:nth-child(4) {
        background: #31c6d4;
      }
      &:nth-child(5) {
        background: #ff74b1;
      }
    }
  }
  @media screen and (max-width: 1280px) {
    .main-content {
      gap: 0px 30px;
    }
    .content {
      padding-left: 30px;
    }
    .trailer {
      max-width: 280px;
    }
    .item {
      gap: 5px 0px;
      &-title {
        font-size: 16px;
      }
    }
    .number {
      font-size: 15px;
    }
    svg {
      width: 34px;
      height: 34px;
    }
    .icon-star {
      width: 18px;
      height: 18px;
    }
    .card-item {
      max-height: 230px;
    }
  }
  @media screen and (max-width: 1024px) {
    .main-content {
      gap: 0px 25px;
    }
    .content {
      padding-left: 25px;
    }
    .trailer {
      max-width: 260px;
    }
    .heading {
      font-size: 23px;
    }
    .item {
      gap: 5px 0px;
      &-title {
        font-size: 15px;
      }
    }
    .number {
      font-size: 14px;
    }
    svg {
      width: 32px;
      height: 32px;
    }
    .icon-star {
      width: 16px;
      height: 16px;
    }
    .card-item {
      max-height: 220px;
    }
    .popular {
      gap: 0px 15px;
    }
    .genres {
      span {
        padding: 6px 13px;
        font-size: 13px;
        border-radius: 6px;
      }
    }
  }
`;

const HomePage = () => {
  return (
    <HomePageStyles>
      <div className="container">
        <div className="main-content">
          <Trailer className="trailer"></Trailer>
          <div className="content">
            <div className="popular">
              <Heading>Popular Movie</Heading>
              <div className="card">
                <MovieList type={"popular"} className="card-item"></MovieList>
              </div>
            </div>
            <div className="rate">
              <Heading>Top rated movies</Heading>
              <div className="card">
                <MovieList type={"top_rated"}></MovieList>
              </div>
            </div>
            <div className="now">
              <Heading>Now playing</Heading>
              <div className="card">
                <MovieList type={"now_playing"}></MovieList>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomePageStyles>
  );
};

export default HomePage;