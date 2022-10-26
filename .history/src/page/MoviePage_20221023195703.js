import React from "react";
import styled from "styled-components";
import Search from "../components/search/Search";

const MoviePageStyles = styled.div`
  color: white;
`;
const MoviePage = () => {
  return (
    <MoviePageStyles>
      <Search></Search>
    </MoviePageStyles>
  );
};

export default MoviePage;
