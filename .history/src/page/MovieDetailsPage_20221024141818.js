import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const MovieDetailsPageStyles = styled.div``;
const {movieId} = useParams("")
const MovieDetailsPage = () => {
  return <MovieDetailsPageStyles></MovieDetailsPageStyles>;
};

export default MovieDetailsPage;
