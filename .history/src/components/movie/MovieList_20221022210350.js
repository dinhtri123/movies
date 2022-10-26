import React from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
const MovieListStyles = styled.div``;
const MovieList = () => {
    const { data, error } = useSWR(`/api/user/${id}`, fetcher)
  return (
    <MovieListStyles>
      <MovieCard></MovieCard>
    </MovieListStyles>
  );
};

export default MovieList;
