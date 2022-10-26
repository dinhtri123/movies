import React from "react";
import styled from "styled-components";

const MovieCardStyles = styled.div`
  width: 100%;
  height: 200px;
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
  }
  .card-item {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 10px;
    overflow: hidden;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    align-items: center;
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
    gap: 5px;
  }
  .number {
    font-size: 16px;
  }
  .icon-star {
    width: 20px;
    height: 20px;
  }
`;
const MovieCard = ({ item, cate = "upcoming" }) => {
  const { poster_path, title, vote_average, release_date } = item;
  return (
    <MovieCardStyles className={cate}>
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
          <span className="item-since">
            {/* {new Date(release_date).getFullYear()} */}
            {release_date}
          </span>
        </div>
        <div className="star">
          <span className="number">{vote_average}</span>
          <img src="/star.png" alt="" className="icon-star" />
        </div>
      </div>
    </MovieCardStyles>
  );
};

export default MovieCard;
