import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useSWR from "swr";

const MovieDetailsPageStyles = styled.div``;
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=
const MovieDetailsPage = () => {
    const {data} = useSWR(``)
  const {movieId} = useParams();
  return <MovieDetailsPageStyles>Movie details page</MovieDetailsPageStyles>;
};

export default MovieDetailsPage;
