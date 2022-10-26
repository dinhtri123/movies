import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const MovieDetailsPageStyles = styled.div``;

const MovieDetailsPage = () => {
  const {movieId} = useParams();
  console.log(movieId);
  return <MovieDetailsPageStyles>Movie details page</MovieDetailsPageStyles>;
};

export default MovieDetailsPage;
