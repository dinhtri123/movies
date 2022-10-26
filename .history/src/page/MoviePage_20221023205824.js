import React from "react";
import { useFetcher } from "react-router-dom";
import styled from "styled-components";
import useSWR from "swr";
import Search from "../components/search/Search";

const MoviePageStyles = styled.div`
  color: white;
  margin-bottom: 60px;
`;
const MoviePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/?api_key=bee9d365514775f0a6d69d0ecb510c45`,
    useFetcher
  );
  console.log(data);
  const movies = data?.results || [];
  return (
    <MoviePageStyles>
      <Search></Search>
      <div className="container"></div>
    </MoviePageStyles>
  );
};

export default MoviePage;
