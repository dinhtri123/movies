import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../apiConfig";
import  { CardSkeleton } from "../components/movie/MovieCard";
import Search from "../components/search/Search";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";
import { v4 } from "uuid";
import MovieCardV2 from "../components/movie/MovieCardV2";
const MoviePageStyles = styled.div`
  color: white;
  margin-bottom: 60px;
  .card {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    margin-bottom: 50px;
  }
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    width: min-content;
    margin: auto;
    padding: 5px 10px;
    border-radius: 16px;
    ion-icon {
      padding: 10px 20px;
      display: flex;
      align-items: center;
      border-radius: 8px;
      &:hover {
        background: ${(props) => props.theme.redLight};
        color: white;
      }
    }
    li {
      border-radius: 8px;
      padding: 10px 20px;
      &:hover {
        color: ${(props) => props.theme.redLight};
      }
    }
    .selected {
      background: ${(props) => props.theme.redLight};
      animation: zoom 0.25s linear;
      font-weight: 550;
      &:hover {
        color: #fff;
      }
      @keyframes zoom {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
  @media screen and (max-width:1024px){
    .card{
      grid-template-columns: ;
    }
  }
`;

const itemsPerPage = 20;
const MoviePage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const [url, setUrl] = useState(tmdbAPI.getMoviePage("popular", nextPage));
  const filterDebounce = useDebounce(filter, 1000);
  const { data, error } = useSWR(url, fetcher);
  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=bee9d365514775f0a6d69d0ecb510c45&query=${filterDebounce}&page=${nextPage}`
      );
    } else {
      setUrl(tmdbAPI.getMoviePage("popular", nextPage));
    }
  }, [filterDebounce, nextPage]);
  console.log(url);
  //pagination
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  ///
  const movies = data?.results || [];
  const isLoading = !data && !error;
  return (
    <MoviePageStyles>
      <Search onChange={handleFilterChange}></Search>

      <div className="container">
        {isLoading && (
          <div className="card">
            {new Array(itemsPerPage).fill(0).map(() => (
              <CardSkeleton
                key={v4()}
                className="h-[400px] rounded-lg"
              ></CardSkeleton>
            ))}
          </div>
        )}
        {!isLoading && (
            <div className="card">
              {movies.length > 0 &&
                movies.map((item) => (
                  <MovieCardV2 key={item.id} item={item} cate="top_rated"></MovieCardV2>
                ))}
            </div>
        )}
        <ReactPaginate
          breakLabel="..."
          nextLabel=<ion-icon name="chevron-forward-outline"></ion-icon>
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel=<ion-icon name="chevron-back-outline"></ion-icon>
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </MoviePageStyles>
  );
};

export default MoviePage;
