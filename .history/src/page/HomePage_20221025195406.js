import React from "react";
import Banner from "../components/banner/Banner";
import styled from "styled-components";
import Heading from "../components/heading/Heading";
import MovieList from "../components/movie/MovieList";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../apiConfig";
import Trailer from "../components/trailer/Trailer";
import LoadingSkeleton from "../components/loading/LoadingSkeleton";

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
      .dot {
        width: 1px;
        height: 20px;
        background: rgba(255, 255, 255, 0.2);
      }
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
`;

const HomePage = () => {
  const { data, error } = useSWR(tmdbAPI.getMovies("popular"), fetcher);

  if (!data) return;
  const movies = data?.results || [];
  const isLoading = !data && !error;
  return (
    
    <HomePageStyles>

      <div className="container">
  
        <Banner></Banner>
        <div className="main-content">
          <Trailer></Trailer>
          <div className="content">
            <div className="popular">
              <div className="heading-top">
                <div className="heading-top-right">
                  <Heading className="heading">Popular Movie</Heading>
                  <span className="dot"></span>
                  <span className="number">{movies.length} movies</span>
                </div>
                <button type="submit">All movies</button>
              </div>
              <div className="card">
                <MovieList type={"popular"}></MovieList>
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
