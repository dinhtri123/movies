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
        height: 6px;
        position: relative;
      }
      .outner {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .inner {
        width: 85%;
        height: 85%;
        border-radius: 50%;
        border: 1px solid blue;
      }
    }
  }
`;
const MovieDetailsPage = () => {
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
