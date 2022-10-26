import React from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../../apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const MovieListStyles = styled.div`
  .upcoming {
    display: flex;
    flex-direction: column;
    gap: 40px 0px;
  }
  .popular {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
  }
  .rate {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`;
const MovieList = ({ type }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=bee9d365514775f0a6d69d0ecb510c45`,
    fetcher
  );
  const movies = data?.results || [];

  // console.log(movies);
  return (
    <MovieListStyles>
      <div className="upcoming">
        {movies.length > 0 &&
          type === "upcoming" &&
          movies
            .slice(0, 3)
            .map((item) => (
              <MovieCard key={item.id} item={item} cate="upcoming"></MovieCard>
            ))}
      </div>
      <div className="popular">
        {movies.length > 0 &&
          type === "popular" &&
          movies
            .slice(0, 2)
            .map((item) => (
              <MovieCard key={item.id} item={item} cate="popular"></MovieCard>
            ))}
      </div>
      <div className="rate">
        <Swiper></Swiper>
        {movies.length > 0 &&
          type === "top_rated" &&
          movies.map((item) => (
            <SwiperSlide>
              <MovieCard  item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </div>
    </MovieListStyles>
  );
};

export default MovieList;
