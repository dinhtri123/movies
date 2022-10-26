import React from "react";
import styled from "styled-components";

const MoviePageStyles = styled.div`
color:white;`;
const MoviePage = () => {
  return <MoviePageStyles>
    <div className="container">
        <Search></Search>
    </div>
  </MoviePageStyles>;
};

export default MoviePage;
