import React from "react";
import Banner from "../components/banner/Banner";
import styled from "styled-components";
import Heading from "../components/heading/Heading";
import MovieList from "../components/movie/MovieList";
import useSWR from "swr";
import { fetcher } from "../apiConfig";

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
`;
const HomePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=bee9d365514775f0a6d69d0ecb510c45`,
    fetcher
  );

  const movies = data?.results || [];

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
            <div className="favourite">
              <Heading>Favourite genres</Heading>
              <div className="genres">
                <span>Action</span>
                <span>Western</span>
                <span>Adventures</span>
                <span>Drama</span>
              </div>
            </div>
          </div>
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
