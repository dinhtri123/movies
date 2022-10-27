import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { tmdbAPI } from "../../apiConfig";
import Button from "../button/Button";

const MovieCardV2Styles = styled.div`
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
  background: rgba(0, 0, 0, 0.3);
  padding: 10px;
  transform: scale(1);
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.03);
    animation: hover 0.2s linear;
  }
  @keyframes hover {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.03);
    }
  }
  .image {
    position: relative;
    width: 100%;
    height: 64%;
  }
  .star {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    border-radius: 50%;
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      width: 86%;
      height: 86%;
      border-radius: 50%;
      background-color: #0f0f0f;
      z-index: -1;
      transform: translate(7.5%, 7.5%);
    }
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
  .card-item-second {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 10px;
    overflow: hidden;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.25s linear;
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: inherit;
      backdrop-filter: blur(3px);
      box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.1);
    }
    .since {
      font-size: 16px;
      z-index: 1;
      font-weight: 500;
    }
  }
`;

const MovieCardV2 = ({ item, cate = "upcoming", className = "" }) => {
  const { poster_path, title, vote_average, release_date, id } = item;
  const navigate = useNavigate();
  if (!item) return;
  return (
    <MovieCardV2Styles cate={cate} className={`card-second ${className}`}>
      <div className="image">
        <span
          className={`star ${
            vote_average >= 8
              ? "bg-[#7dce13] "
              : vote_average >= 6.5
              ? "bg-[#E6B325]"
              : "bg-[#EB4747]"
          }`}
        >
          {vote_average.toFixed(1)}
        </span>
        <div className="overlay"></div>
        <img src={tmdbAPI.image(poster_path)} alt="poster" />
        <div className="card-item-second">
          <span className="since">{release_date}</span>
        </div>
      </div>
      <div className="w-full h-[36] flex flex-col justify-between items-center pt-[15px]">
        <span className="flex justify-center font-semibold">{title}</span>
        <Button
          className="w-full h-[50px]"
          onClick={() => navigate(`/movie/${id}`)}
        >
          Watch now
        </Button>
      </div>
    </MovieCardV2Styles>
  );
};

export default MovieCardV2;
