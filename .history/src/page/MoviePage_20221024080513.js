import React from "react";
import { useFetcher } from "react-router-dom";
import styled from "styled-components";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import Search from "../components/search/Search";

const MoviePageStyles = styled.div`
  color: white;
  margin-bottom: 60px;
`;
const MoviePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular/?api_key=bee9d365514775f0a6d69d0ecb510c45`,
    useFetcher
  );
  const movies = data?.results || [];
  console.log(movies);
  return (
    <MoviePageStyles>
      <Search></Search>
      <div className="container">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
    </MoviePageStyles>
  );
};

export default MoviePage;
