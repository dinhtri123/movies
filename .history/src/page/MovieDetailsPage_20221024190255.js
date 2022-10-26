import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "../apiConfig";

const MovieDetailsPageStyles = styled.div`
  .background {
    position: relative;
    width: 100%;
    height: 600px;
    z-index: -1;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.1) 20%,
        #0f0f0f
      );
      /* backdrop-filter: blur(1px); */
    }
  }
  .main {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    gap: 0px 40px;
    margin-top: -100px;
    margin-bottom: 60px;
  }
  .left {
    img {
      width: 100%;
      height: 350px;
      object-fit: cover;
      border-radius: 16px;
    }
    &-content {
      /* display: flex; */
      /* gap: 0px 20px; */
      margin-top: 20px;
      .percent {
        width: 60px;
        height: 60px;
        position: relative;
      }
      .outner {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .inner {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
      }
      circle {
        fill: none;
        stroke: url(#GradientColor);
        stroke-width: 5px;
        stroke-dasharray: 160;
        stroke-dashoffset: 160;
        animation: percent 3s linear forwards;
      }
      @keyframes percent {
        100% {
          stroke-dashoffset: ${percent};
        }
      }
      svg {
        position: absolute;
        inset: 0;
      }
    }
  }
`;
const MovieDetailsPage = ({percent = }) => {
    const percent = ;
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=bee9d365514775f0a6d69d0ecb510c45`,
    fetcher
  );
  if (!data) return;
  const { backdrop_path, poster_path } = data;
  console.log(data);

  return (
    <MovieDetailsPageStyles>
      <div className="background">
        <img
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt=""
        />
        <div className="overlay"></div>
      </div>
      <div className="container main">
        <div className="left">
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt=""
          />
          <div className="left-content">
            <div className="percent">
              <div className="outner">
                <div className="inner">
                  <div className="number">8.2</div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="60px"
                height="60px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="30" cy="30" r="25" stroke-linecap="round" />
              </svg>
            </div>
            <div className="rate">
              <span className="rating">7.89 ratings</span>
              <span className="reviews">81 reviews</span>
            </div>
          </div>
        </div>
        <div className="center">center</div>
        <div className="right">right</div>
      </div>
    </MovieDetailsPageStyles>
  );
};

export default MovieDetailsPage;
