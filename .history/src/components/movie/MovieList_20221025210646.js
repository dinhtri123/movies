import React from "react";
import styled from "styled-components";
import MovieCard, { CardSkeleton } from "./MovieCard";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { v4 } from "uuid";
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
  const { data, error } = useSWR(tmdbAPI.getMovies(type), fetcher);
  if (!data) return;
  const isLoading = !data && !error;
  const movies = data?.results || [];
  if (type === "upcoming") {
    return (
      <MovieListStyles>
        {isLoading && (
          <>
            <CardSkeleton
              key={v4()}
              className="h-[200px] mb-[40px]"
            ></CardSkeleton>
            <CardSkeleton
              key={v4()}
              className="h-[200px] mb-[40px]"
            ></CardSkeleton>
            <CardSkeleton
              key={v4()}
              className="h-[200px] mb-[40px]"
            ></CardSkeleton>
          </>
        )}
        {!isLoading && (
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
        )}
      </MovieListStyles>
    );
  }
  if (type === "popular") {
    return (
      <MovieListStyles>
      {!isLoading && (
          <div className="grid grid-cols">
            <CardSkeleton
              key={v4()}
              className="h-[250px] mb-[40px]"
            ></CardSkeleton>
            <CardSkeleton
              key={v4()}
              className="h-[250px] mb-[40px]"
            ></CardSkeleton>
            
          </div>
        )}
{isLoading && 
        <div className="popular">
          {movies.length > 0 &&
            type === "popular" &&
            movies
              .slice(0, 2)
              .map((item) => (
                <MovieCard key={item.id} item={item} cate="popular"></MovieCard>
              ))}
        </div>}
      </MovieListStyles>
    );
  }
  if (type === "top_rated") {
    return (
      <MovieListStyles>
        <div className="rate">
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            {movies.length > 0 &&
              type === "top_rated" &&
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
  if (type === "now_playing") {
    return (
      <MovieListStyles>
        <div className="now_playing">
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            {movies.length > 0 &&
              type === "now_playing" &&
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
