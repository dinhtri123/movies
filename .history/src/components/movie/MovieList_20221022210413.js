import React from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
const MovieListStyles = styled.div``;
const MovieList = () => {
    const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>`, fetcher)
  return (
    <MovieListStyles>
      <MovieCard></MovieCard>
    </MovieListStyles>
  );
};

export default MovieList;
