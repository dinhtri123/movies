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
    .trailer {
      display: none;
    }
    .content {
      border-left: 0px;
      padding-left: 0;
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
      width: 18px;
      height: 18px;
    }
  }
  @media screen and (max-width: 768px) {
    .heading {
      font-size: 20px;
      margin-bottom: 15px;
    }
    .card-item {
      width: 350px;
    }
    .popular {
      .swiper-wrapper {
        width: 350px;
      }
    }
  }
  @media screen and (max-width: 568px) {
    .heading {
      font-size: 20px;
    }
    .card-item {
      width: 300px;
    }
    .popular {
      .swiper-wrapper {
        width: 300px;
      }
    }
    .item-title {
      font-size: 14px;
    }
    .item-since {
      font-size: 11px;
    }
    svg {
      width: 30px;
      height: 30px;
    }
    .number {
      font-size: 13px;
    }
    .icon-star {
      width: 16px;
      height: 16px;
    }
  }
  @media screen and (max-width: 480px) {
    .heading {
      font-size: 18px;
    }
    .card-item {
      width: 260px;
    }
    .popular {
      
      .swiper-wrapper {
        width: 260px;
      }
    }
    .item-title {
      font-size: 13px;
    }
    .item-since {
      font-size: 10px;
    }
    svg {
      width: 28px;
      height: 28px;
    }
    .number {
      font-size: 12px;
    }
    .icon-star {
      width: 14px;
      height: 14px;
    }
  }
  @media screen and (max-width: 375px) {
    .heading {
      font-size: 16px;
    }
    .card-item {
      width: 240px;
    }
    .popular {
      
      .swiper-wrapper {
        width: 260px;
      }
    }
    .item-title {
      font-size: 13px;
    }
    .item-since {
      font-size: 10px;
    }
    svg {
      width: 28px;
      height: 28px;
    }
    .number {
      font-size: 12px;
    }
    .icon-star {
      width: 14px;
      height: 14px;
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
