import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../apiConfig";
import { CardSkeleton } from "../components/movie/MovieCard";
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
  @media screen and (max-width: 1280px) {
    .card {
      gap: 30px;
    }
  }
  @media screen and (max-width: 1024px) {
    .section-search {
      height: 180px;
      .search {
        height: 50px;
        input {
          padding: 8px 20px;
        }
        ion-icon {
          font-size: 24px;
          padding: 14px 25px;
        }
      }
    }
    .card {
      gap: 20px;
    }
    .swiper-wrapper {
      width: 240px;
    }
    .star {
      width: 40px;
      height: 40px;
    }
    .card-item-second {
      .since {
        font-size: 14px;
      }
    }
    .btn {
      height: auto;
      padding: 12px;
      font-size: 15px;
    }
    .card-second {
      height: 390px;
    }
  }
  @media screen and (max-width: 768px) {
    .section-search {
      height: 160px;
      .search {
        height: 45px;
        input {
          padding: 8px 20px;
        }
        ion-icon {
          font-size: 22px;
          height: 100%;
          padding: 0px 20px;
        }
      }
    }
    .card {
      gap: 20px;
      grid-template-columns: repeat(3, 1fr);
    }
    .swiper-wrapper {
      width: 240px;
    }
    .star {
      width: 35px;
      height: 35px;
    }
    .card-item-second {
      .since {
        font-size: 12px;
      }
    }
    .item-bottom {
      span {
        font-size: 12px;
      }
    }
    .btn {
      height: auto;
      padding: 10px;
      font-size: 14px;
    }
    .card-second {
      height: 350px;
    }
  }
  @media screen and (max-width: 568px) {
    .section-search {
      height: 140px;
      .search {
        height: 40px;
        ion-icon {
          font-size: 20px;
          height: 100%;
          padding: 0px 20px;
        }
      }
    }
    .card {
      gap: 15px;
      grid-template-columns: repeat(3, 1fr);
    }
    .swiper-wrapper {
      width: 240px;
    }
    .star {
      width: 35px;
      height: 35px;
    }
    .card-item-second {
      .since {
        font-size: 11px;
      }
    }
    .item-bottom {
      span {
        font-size: 11px;
      }
    }
    .btn {
      height: auto;
      padding: 8px;
      font-size: 12px;
      border-radius: 5px;
    }
    .card-second {
      height: 320px;
      padding: 5px;
    }
    .pagination {
      padding: 0;
      background: transparent;
      border-radius: 12px;
      li {
        padding: 5px 15px;
        border-radius: 5px;
        font-size: 10px;
      }
      ion-icon {
        padding: 0;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .section-search {
      height: 120px;
      .search {
        height: 35px;
        input {
          padding: 6px 15px;
        }
        ion-icon {
          font-size: 18px;
          height: 100%;
          padding: 0px 15px;
        }
      }
    }
    .card {
      gap: 20px;
      grid-template-columns: repeat(2, 1fr);
    }
    .swiper-wrapper {
      width: 240px;
    }
    .star {
      width: 30px;
      height: 35px;
    }
    .card-item-second {
      .since {
        font-size: 10px;
      }
    }
    .item-bottom {
      span {
        font-size: 10px;
      }
    }
    .btn {
      height: auto;
      padding: 10px;
      font-size: 10px;
    }
    .card-second {
      height: 320px;
    }
    .pagination {
      padding: 0;
      background: transparent;
      border-radius: 12px;
      li {
        padding: 3px 10px;
        border-radius: 5px;
        font-size: 10px;
      }
      ion-icon {
        padding: 0;
      }
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
                <MovieCardV2
                  key={item.id}
                  item={item}
                  cate="top_rated"
                ></MovieCardV2>
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
