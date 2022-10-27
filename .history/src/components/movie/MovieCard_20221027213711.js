import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { tmdbAPI } from "../../apiConfig";
import LoadingSkeleton from "../loading/LoadingSkeleton";
const MovieCardStyles = styled.div`
  cursor: pointer;
  ${(props) =>
    props.cate === "upcoming" &&
    css`
      height: 200px;
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
  .image {
    position: absolute;
    inset: 0;
    z-index: -1;
  }
  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.2);
  }
  img {
    object-fit: cover;
    background-position: center;
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
const MovieCard = ({ item, cate = "upcoming", className = "" }) => {
  const { poster_path, title, vote_average, release_date, id } = item;
  const navigate = useNavigate();
  return (
    <MovieCardStyles
      cate={cate}
      className={className}
      onClick={() => navigate(`/movie/${id}`)}
    >
      <div className="image">
        <div className="overlay"></div>
        <img src={tmdbAPI.image(poster_path)} alt="poster" />
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
          <img src="data:image/png;base64,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" alt="" className="icon-star" />
        </div>
      </div>
    </MovieCardStyles>
  );
};

export default MovieCard;

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
