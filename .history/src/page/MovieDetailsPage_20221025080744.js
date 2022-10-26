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
      color: ${(props) => props.theme.redLight};
    }
    .original_title {
      font-size: 14px;
      padding: 10px 0px;
    }
    .share {
      display: flex;
      gap: 20px;
      align-items: center;
      margin: 15px 0px;
    }
    .btn_trailer {
      padding: 15px 30px;
      background: ${(props) => props.theme.redLight};
      font-weight: 500;
      border-radius: 30px;
      display: flex;
      align-items: center;
      font-size: 18px;
      ion-icon {
        font-size: 25px;
        margin-left: 10px;
      }
    }
    .overview {
      margin: 25px 0px;
    }
    .detail {
      h4 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
      }
    }
    .info {
      display: flex;
      gap: 20px;
      padding-bottom: 7px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      margin-bottom: 15px;
      .details_title {
        width: 150px;
        font-weight: 500;
        display: flex;
        align-items: center;
      }
      .details_value {
        color: #bebebe;
      }
      .genres_value {
        display: flex;
        flex-wrap: wrap;
        gap: 10px 15px;
        span {
          padding: 8px 15px;
          background: ${(props) => props.theme.redLight};
          border-radius: 12px;
          color: white;
        }
      }
    }
  }
  .right {
    padding-top: 40px;
    h4 {
      font-size: 25px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    .content {
      .card {
        display: flex;
        gap: 0px 20px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }
        .content{
          flex:1;

        }
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

          <div className="left-content">
            <span className="rating">{vote_average} ratings</span>
            <span className="reviews">{vote_count} reviews</span>
          </div>
        </div>
        <div className="center">
          <h3 className="title">{title}</h3>
          <p className="original_title">Original title: {original_title}</p>
          <div className="date">{release_date}</div>
          <div className="share">
            <button className="btn_trailer">
              Watch trailer <ion-icon name="play-circle-outline"></ion-icon>
            </button>
            <span>Bookmark</span>
          </div>
          <div className="overview">{overview}</div>
          <div className="detail">
            <h4>Details</h4>
            <div className="genres info">
              <span className="details_title">Genres</span>
              <div className="genres_value">
                {genres.length > 0 &&
                  genres.map((item) => (
                    <span key={item.id} className="details_value">
                      {item.name}
                    </span>
                  ))}
              </div>
            </div>
            <div className="country info">
              <span className="details_title">Country of origin</span>
              {production_countries.length > 0 &&
                production_countries.map((item, index) => (
                  <span key={index} className="details_value">
                    {item.name}
                  </span>
                ))}
            </div>
            <div className="runtime info">
              <span className="details_title">Runtime</span>
              <span className="details_value">{runtime} min</span>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>Cast & Crew</h4>
          <div className="content">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1666551158841-29b196bde938?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=453&q=80"
                alt=""
              />
              <div className="content-right">
                <p className="cast_title">Jame Lorente</p>
                <span className="cast_add">as orento</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MovieDetailsPageStyles>
  );
};

export default MovieDetailsPage;
