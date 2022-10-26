import React from "react";
import styled from "styled-components";
import Search from "../components/search/Search";

const MoviePageStyles = styled.div`
  color: white;
  margin-bottom: 60px;
`;
const MoviePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=bee9d365514775f0a6d69d0ecb510c45`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <MoviePageStyles>
      <Search></Search>
      <div className="container"></div>
    </MoviePageStyles>
  );
};

export default MoviePage;
