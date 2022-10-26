import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const MovieDetailsPageStyles = styled.div``;
// get
const params = useParams();
console.log(params)
const MovieDetailsPage = () => {
  return <MovieDetailsPageStyles></MovieDetailsPageStyles>;
};

export default MovieDetailsPage;
