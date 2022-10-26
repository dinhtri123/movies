import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const MovieCardV2Styles = styled.div`
  cursor: pointer;
  ${(props) =>
    props.cate === "upcoming" &&
    css`
      height: 200px;
    `};
  ${(props) =>
    (props.cate === "top_rated" || props.cate === "now_playing") &&
    css`
      height: 400px;
    `};
  ${(props) =>
    props.cate === "popular" &&
    css`
      height: 250px;
    `};
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  background: white;
  padding:5
  .image {
    position: relative;
    width: 100%;
    height: 250px;
  }
  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 10px;
  }
  .card-item {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 10px;
    overflow: hidden;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    align-items: center;
    transition: all 0.25s linear;
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: inherit;
      backdrop-filter: blur(3px);
      box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.1);
      z-index: -1;
    }
  }
  .item {
    display: flex;
    flex-direction: column;
    padding: 0px 5px;
    line-height: 1.3;
    &-title {
      font-weight: 500;
      font-size: 18px;
    }
    &-since {
      font-size: 12px;
    }
  }
  .star {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .number {
    font-size: 16px;
  }
  .icon-star {
    width: 20px;
    height: 20px;
  }
  &:hover > .card-item {
    background: ${(props) => props.theme.redLight};
  }
`;
const MovieCardV2 = ({ item, cate = "upcoming", className = "" }) => {
  const { poster_path, title, vote_average, release_date, id } = item;
  const navigate = useNavigate();
  return (
    <MovieCardV2Styles
      cate={cate}
      className={className}
      onClick={() => navigate(`/movie/${id}`)}
    >
      <div className="image">
        <div className="overlay"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt="poster"
        />
      </div>
      <div className="card-item">
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
        </span>
        <div className="item">
          <span className="item-title">{title}</span>
          <span className="item-since">{release_date}</span>
        </div>
        <div className="star">
          <span className="number">{vote_average.toFixed(1)}</span>
          <img src="/star.png" alt="" className="icon-star" />
        </div>
      </div>
    </MovieCardV2Styles>
  );
};

export default MovieCardV2;

const CardStyles = styled.div`
  width: 100%;
  border-radius: 10px;
  position: relative;
  .image {
    position: absolute;
    inset: 0;
    z-index: -1;
  }
`;
export const CardSkeleton = ({ className }) => {
  return (
    <CardStyles className={className}>
      <div className="image">
        <LoadingSkeleton
          width="100%"
          height="100%"
          radius="10px"
        ></LoadingSkeleton>
      </div>
    </CardStyles>
  );
};
