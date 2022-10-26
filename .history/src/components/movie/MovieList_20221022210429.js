import React from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
const MovieListStyles = styled.div``;
const MovieList = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=bee9d365514775f0a6d69d0ecb510c45`,
    fetcher
  );
  return (
    <MovieListStyles>
      <MovieCard></MovieCard>
    </MovieListStyles>
  );
};

export default MovieList;
