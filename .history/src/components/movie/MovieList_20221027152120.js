import React from "react";
import styled from "styled-components";
import MovieCard, { CardSkeleton } from "./MovieCard";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MovieCardV2 from "./MovieCardV2";
const MovieListStyles = styled.div`
  .upcoming {
    display: flex;
    flex-direction: column;
    gap: 40px 0px;
  }

  .swiper {
    display: flex;
    gap: 40px 0px;
    padding: 20px 0px;
  }
  .swiper-wrapper {
    user-select: none;
    width: 260px;
  }
  .popular {
    width: 100%;
    display: flex;
    .swiper {
      width: 100%;
      padding: 0px;
    }
    .swiper-wrapper {
      width: 400px;
    }
    
  }
`;
const MovieList = ({ type, className }) => {
  const { data, error } = useSWR(tmdbAPI.getMovies(type), fetcher);
  const isLoading = !data && !error;
  if (!data) return;
  const movies = data?.results || [];
  if (type === "upcoming") {
    return (
      <MovieListStyles>
        {isLoading && (
          <>
            <CardSkeleton className="h-[200px] mb-[40px]"></CardSkeleton>
            <CardSkeleton className="h-[200px] mb-[40px]"></CardSkeleton>
            <CardSkeleton className="h-[200px] mb-[40px]"></CardSkeleton>
          </>
        )}
        {!isLoading && (
          <div className="upcoming">
            {movies.length > 0 &&
              type === "upcoming" &&
              movies
                .slice(0, 5)
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
        {isLoading && (
          <div className="grid grid-cols-2 gap-x-[40px]">
            <CardSkeleton className="h-[250px]"></CardSkeleton>
            <CardSkeleton className="h-[250px]"></CardSkeleton>
          </div>
        )}
        {!isLoading && (
          <div className="popular">
            <Swiper
              grabCursor={"true"}
              spaceBetween={"4%"}
              slidesPerView={"auto"}
            >
              {movies.length > 0 &&
                type === "popular" &&
                movies.map((item) => (
                  <SwiperSlide key={item.id}>
                    <MovieCard
                      item={item}
                      cate="popular"
                      className={className}
                    ></MovieCard>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        )}
      </MovieListStyles>
    );
  }
  if (type === "top_rated") {
    return (
      <MovieListStyles>
        {isLoading && (
          <div className="grid grid-cols-3 gap-x-[40px]">
            <CardSkeleton className="h-[200px]"></CardSkeleton>
            <CardSkeleton className="h-[200px]"></CardSkeleton>
            <CardSkeleton className="h-[200px]"></CardSkeleton>
          </div>
        )}
        {!isLoading && (
          <div className="rate">
            <Swiper
              grabCursor={"true"}
              spaceBetween={20}
              slidesPerView={"auto"}
            >
              {movies.length > 0 &&
                type === "top_rated" &&
                movies.map((item) => (
                  <SwiperSlide key={item.id}>
                    <MovieCardV2 item={item} cate="top_rated"></MovieCardV2>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        )}
      </MovieListStyles>
    );
  }
  if (type === "now_playing") {
    return (
      <MovieListStyles>
        {isLoading && (
          <div className="grid grid-cols-3 gap-x-[40px]">
            <CardSkeleton className="h-[200px]"></CardSkeleton>
            <CardSkeleton className="h-[200px]"></CardSkeleton>
            <CardSkeleton className="h-[200px]"></CardSkeleton>
          </div>
        )}
        {!isLoading && (
          <div className="now_playing">
            <Swiper
              grabCursor={"true"}
              spaceBetween={20}
              slidesPerView={"auto"}
            >
              {movies.length > 0 &&
                type === "now_playing" &&
                movies.map((item) => (
                  <SwiperSlide key={item.id}>
                    <MovieCardV2 item={item} cate="now_playing"></MovieCardV2>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        )}
      </MovieListStyles>
    );
  }
};

export default MovieList;
