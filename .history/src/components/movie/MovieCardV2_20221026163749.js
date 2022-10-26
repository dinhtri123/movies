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
  background: rgba(0, 0, 0, 0.3);
  padding: 10px;
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
  .title {
    font-weight: 500;
    text-align: center;
    margin-top: 15px;
  }
  .overview{
    display:-webkit-box;
    overflow:hidden;
    -webkit-box-orient:vertical ;
    -webkit-line-clamp: 2;
    text-overflow:ell ;
  }
`;
const MovieCardV2 = ({ item, cate = "upcoming", className = "" }) => {
  const { poster_path, title, vote_average, release_date, id, overview } = item;
  const navigate = useNavigate();
  console.log(item);
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
        <div className="card-item">
          <span className="since">{release_date}</span>
        </div>
      </div>
      <h3 className="title">{title}</h3>
      <span className="overview">{overview}</span>
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
