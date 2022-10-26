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
  .swiper {
    display: flex;
    gap: 40px 0px;
  }
  .swiper-wrapper {
    user-select: none;
    width: 300px;
  }
`;
const MovieList = ({ type }) => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=bee9d365514775f0a6d69d0ecb510c45`,
    fetcher
  );
  const movies = data?.results || [];
  if (type === "upcoming") {
    return (
      <MovieListStyles>
        <div className="upcoming">
          {movies.length > 0 &&
            type === "upcoming" &&
            movies
              .slice(0, 3)
              .map((item) => (
                <MovieCard
                  key={item.id}
                  item={item}
                  cate="upcoming"
                ></MovieCard>
              ))}
        </div>
      </MovieListStyles>
    );
  }
  if (type === "popular") {
    return (
      <MovieListStyles>
        <div className="popular">
          {movies.length > 0 &&
            type === "popular" &&
            movies
              .slice(0, 2)
              .map((item) => (
                <MovieCard key={item.id} item={item} cate="popular"></MovieCard>
              ))}
        </div>
      </MovieListStyles>
    );
  }
  if (type === "latest") {
    return (
      <MovieListStyles>
        <div className="top_rated">
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            {movies.length > 0 &&
              type === "latest" &&
              movies.map((item) => (
                <SwiperSlide key={item.id}>
                  <MovieCard item={item}></MovieCard>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </MovieListStyles>
    );
  }
};

export default MovieList;
