import React from "react";
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
const MoviePage = () => {
  const { data } = useSWR(
    `
    https://api.themoviedb.org/3/movie/popular?api_key=bee9d365514775f0a6d69d0ecb510c45`,
    fetcher
  );
  const movies = data?.results || [];
  console.log(data);
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
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </span>
        </div>
      </div>
    </MoviePageStyles>
  );
};

export default MoviePage;
