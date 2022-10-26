import React, { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "../apiConfig";
import MovieCard from "../components/movie/MovieCard";
import Search from "../components/search/Search";

const MoviePageStyles = styled.div`
  color: white;
  margin-bottom: 60px;
  .card {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    margin-bottom: 40px;
  }
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    span {
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        color: ${(props) => props.theme.redLight};
      }
    }
  }
`;
const countPage = 3;
const MoviePage = () => {
  const { nextPage, setNextPage } = useState(1);
  const { data } = useSWR(
    `
    https://api.themoviedb.org/3/movie/popular?api_key=bee9d365514775f0a6d69d0ecb510c45&${nextPage}`,
    fetcher
  );
  if (!data) return;
  const movies = data?.results || [];
  const { page, total_pages } = data;
  return (
    <MoviePageStyles>
      <Search></Search>
      <div className="container">
        <div className="card">
          {movies.length > 0 &&
            movies.map((item) => (
              <MovieCard key={item.id} item={item}></MovieCard>
            ))}
        </div>
        <div className="pagination">
          <span>
            <ion-icon name="chevron-back-outline"></ion-icon>
          </span>
          {new Array(countPage).fill(0).map((item) => )}
          <span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </span>
        </div>
      </div>
    </MoviePageStyles>
  );
};

export default MoviePage;
