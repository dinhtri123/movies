import React from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../../apiConfig";
const MovieListStyles = styled.div``;
const MovieList = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=bee9d365514775f0a6d69d0ecb510c45`,
    fetcher
  );
  const movies = data?.results || [];
  console.log(movies);
  return (
    <MovieListStyles>
    {movies}
      <MovieCard></MovieCard>
    </MovieListStyles>
  );
};

export default MovieList;
