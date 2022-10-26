import React from "react";
import { useParams } from "react-router-dom";
import styled, { css } from "styled-components";
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
    .date {
      margin-top: 20px;
      font-weight: bold;
      text-align: center;
    }
    &-content {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
  }
  .center {
    padding-top: 40px;
    .title {
      font-size: 30px;
      font-weight: 600;
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

  const {
    backdrop_path,
    poster_path,
    release_date,
    vote_average,
    vote_count,
    title,
    original_title,
    overview,
    genres,
    production_countries,
    runtime,
  } = data;
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
          <div className="date">{release_date}</div>
          <div className="left-content">
            <span className="rating">{vote_average} ratings</span>
            <span className="reviews">{vote_count} reviews</span>
          </div>
        </div>
        <div className="center">
          <h3 className="title">{title}</h3>
          <p className="original_title">{original_title}</p>
          <div className="share">
            <button>Watch trailer</button>
            <span>Bookmark</span>
          </div>
          <div className="overview">{overview}</div>
          <div className="detail">
            <h4>Details</h4>
            <div className="genres">
              <span>Genres</span>
              {genres.length > 0 &&
                genres.map((item) => <span key={item.id}>{item.name}</span>)}
            </div>
            <div className="country">
              <span>Country of origin</span>
              {production_countries.length > 0 &&
                production_countries.map((item, index) => (
                  <span key={index}>{item.name}</span>
                ))}
            </div>
            <div className="runtime">
              <span>Runtime</span>
              <span>{runtime} min</span>
            </div>
          </div>
        </div>
        <div className="right">right</div>
      </div>
    </MovieDetailsPageStyles>
  );
};

export default MovieDetailsPage;
