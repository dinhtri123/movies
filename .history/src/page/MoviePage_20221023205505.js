import React from "react";
import styled from "styled-components";
import Search from "../components/search/Search";

const MoviePageStyles = styled.div`
  color: white;
  margin-bottom: 60px;
`;
const MoviePage = () => {
  return (
    <MoviePageStyles>
      <Search></Search>
      <div className="container">
        
      </div>
    </MoviePageStyles>
  );
};

export default MoviePage;
