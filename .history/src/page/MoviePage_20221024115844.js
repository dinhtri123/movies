import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "../apiConfig";
import MovieCard from "../components/movie/MovieCard";
import Search from "../components/search/Search";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";
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
    ion-icon {
      display: flex;
      align-items: center;
    }
    .selected {
      border-radius: 8px;
      padding: 10px 20px;
      background-color: rgba(0, 0, 0, 0.4);
      box-shadow: 0px 0px 10px rgba(255,255,255,0.1),
      inset 1px 1px 10px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(2px);
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
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=bee9d365514775f0a6d69d0ecb510c45&page=${nextPage}`
  );
  const filterDebounce = useDebounce(filter, 1000);
  const { data } = useSWR(url, fetcher);
  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=bee9d365514775f0a6d69d0ecb510c45&query=${filterDebounce}&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=bee9d365514775f0a6d69d0ecb510c45&page=${nextPage}`
      );
    }
  }, [filterDebounce, nextPage]);

  console.log(data);
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

  return (
    <MoviePageStyles>
      <Search onChange={handleFilterChange}></Search>
      <div className="container">
        <div className="card">
          {movies.length > 0 &&
            movies.map((item) => (
              <MovieCard key={item.id} item={item}></MovieCard>
            ))}
        </div>
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
