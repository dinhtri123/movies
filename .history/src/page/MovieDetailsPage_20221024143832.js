import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "react-router-dom";

const MovieDetailsPageStyles = styled.div``;
const MovieDetailsPage = () => {
    const {data} = useSWR(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=bee9d365514775f0a6d69d0ecb510c45`, fetcher)
  const {movieId} = useParams();
  return <MovieDetailsPageStyles>Movie details page</MovieDetailsPageStyles>;
};

export default MovieDetailsPage;
