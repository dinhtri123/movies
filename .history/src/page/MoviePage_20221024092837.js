import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "../apiConfig";
import MovieCard from "../components/movie/MovieCard";
import Search from "../components/search/Search";
import useDebounce from "../hooks/useDebounce";

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
  .header-search {
    position: relative;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    .background {
      z-index: -1;
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
      }
      .overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0.2),
          #0f0f0f
        );
        backdrop-filter: blur(2px);
      }
    }
    .input-search {
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
    }
    .search {
      display: flex;
      align-items: center;
      width: 90%;
      height: 55px;
      position: relative;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.32);
      backdrop-filter: blur(2px);
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;

      input {
        width: 100%;
        height: 100%;
        background-color: transparent;
        padding: 10px 20px;
      }
      ion-icon {
        font-size: 28px;
        padding: 16px 28px;
        background-color: ${(props) => props.theme.redLight};
        border-radius: 5px;
      }
    }
  }
`;
const countPage = 3;
const MoviePage = () => {
  const { filter, setFilter } = useState("");
  // const filterDebounce = useDebounce(filter, 1000);
  const { url, setUrl } = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=bee9d365514775f0a6d69d0ecb510c45`
  );

  // const { nextPage, setNextPage } = useState(1);
  const { data } = useSWR(url, fetcher);
  // useEffect(() => {
  //   if (filterDebounce) {
  //     setUrl(
  //       `https://api.themoviedb.org/3/search/movie?api_key=bee9d365514775f0a6d69d0ecb510c45&query=${filterDebounce}`
  //     );
  //   } else {
  //     setUrl(
  //       `https://api.themoviedb.org/3/movie/popular?api_key=bee9d365514775f0a6d69d0ecb510c45`
  //     );
  //   }
  // }, [filterDebounce]);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  if (!data) return;

  const movies = data?.results || [];
  // const { page, total_pages } = data;

  return (
    <MoviePageStyles>
      <div className="header-search">
        <div className="background">
          <img src="https://laptop88.vn/media/news/1109_kv-new1.png" alt="" />
          <div className="overlay"></div>
        </div>
        <div className="container input-search">
          <div className="search">
            <input type="text" placeholder="Type here to search..." />
            <ion-icon name="search-outline"></ion-icon>
          </div>
        </div>
      </div>
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
          {new Array(countPage).fill(0).map((item, index) => (
            <span key={index}>{index + 1}</span>
          ))}
          <span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </span>
        </div>
      </div>
    </MoviePageStyles>
  );
};

export default MoviePage;
