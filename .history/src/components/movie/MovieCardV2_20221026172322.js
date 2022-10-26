import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import Button from "../button/Button";
import LoadingSkeleton from "../loading/LoadingSkeleton";

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

  .image {
    position: relative;
    width: 100%;
    height: 250px;
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
    background-color: #7dce13;
    border-radius: 50%;
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      width: 85%;
      height: 85%;
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
  .card-item {
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
  console.log(item);
  const star = document.querySelector(".star");
  console.log(star)
  let valueStar = star?.textContent;
  console.log(valueStar);
  //   if (valueStar >= 8) {
  //     star.style.backgroundColor = "#7dce13";
  //   }
  //   if (valueStar >= 5.5) {
  //     star.style.backgroundColor = "#E6B325";
  //   }
  //   if (valueStar < 5.5) {
  //     star.style.backgroundColor = "#EB4747";
  //   }
  return (
    <MovieCardV2Styles cate={cate} className={className}>
      <div className="image">
        <span className="star">{vote_average}</span>
        <div className="overlay"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt="poster"
        />
        <div className="card-item">
          <span className="since">{release_date}</span>
        </div>
      </div>
      <div className="w-full h-[130px] flex flex-col justify-between items-center pt-[15px]">
        <h3 className="flex justify-center">{title}</h3>
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
