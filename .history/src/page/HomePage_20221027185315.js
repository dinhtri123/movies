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
    .card-slice-second {
      
    }
    .swiper {
      gap: 20px 0px;
      padding: 10px 0px;
    }
    .swiper-wrapper {
      width: 240px;
    }
    .star {
      width: 45px;
      height: 45px;
    }
    .since {
      font-size: 15px;
    }
    .btn {
      padding: 14px;
      font-size: 16px;
    }
  }
  @media screen and (max-width: 768px) {
    .heading {
      font-size: 20px;
      margin-bottom: 15px;
    }
    .card-item {
      max-width: 350px;
    }
    .popular {
      .swiper-wrapper {
        width: 350px;
      }
    }
    .card-slice-second {
      .swiper-wrapper {
        width: 220px;
      }
    }

    .star {
      width: 40px;
      height: 40px;
    }
    .card-item-second {
      .since {
        font-size: 14px;
      }
    }
    .btn {
      padding: 10px;
      font-size: 15px;
      height: auto;
    }
    .card-second {
      height: 380px;
    }
  }
  @media screen and (max-width: 568px) {
    .heading {
      font-size: 20px;
    }
    .card-item {
      max-width: 300px;
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
    .card-slice-second {
      .swiper-wrapper {
        width: 210px;
      }
    }

    .star {
      width: 35px;
      height: 35px;
    }
    .card-item-second {
      .since {
        font-size: 12px;
      }
    }
    .btn {
      padding: 9px;
      font-size: 13px;
      height: auto;
      border-radius: 5px;
    }
    .card-second {
      max-height: 350px;
    }
  }
  @media screen and (max-width: 480px) {
    .heading {
      font-size: 18px;
    }
    .card-item {
      max-width: 260px;
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
    .card-slice-second {
      .swiper-wrapper {
        width: 180px;
      }
    }

    .star {
      width: 30px;
      height: 30px;
    }
    .card-item-second {
      .since {
        font-size: 10px;
      }
    }
    .btn {
      padding: 8px;
      font-size: 12px;
      border-radius: 5px;
    }
    .card-second {
      max-height: 320px;
    }
  }
  @media screen and (max-width: 375px) {
    .heading {
      font-size: 14px;
    }
    .card-item {
      max-width: 240px;
    }
    .popular {
      .swiper-wrapper {
        width: 240px;
      }
    }
    .item-title {
      font-size: 12px;
    }
    .item-since {
      font-size: 9px;
    }
    svg {
      width: 25px;
      height: 25px;
    }
    .number {
      font-size: 11px;
    }
    .icon-star {
      width: 12px;
      height: 12px;
    }
    .card-slice-second {
      .swiper-wrapper {
        width: 170px;
      }
    }
    .star {
      width: 28px;
      height: 28px;
    }
    .card-item-second {
      .since {
        font-size: 9px;
      }
    }
    .btn {
      padding: 7px;
      font-size: 11px;
      border-radius: 3px;
    }
    .card-second {
      max-height: 300px;
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
