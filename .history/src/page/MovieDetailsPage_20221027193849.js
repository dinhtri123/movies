import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../apiConfig";
import Button from "../components/button/Button";
import LoadingSkeleton from "../components/loading/LoadingSkeleton";
import MovieCardV2 from "../components/movie/MovieCardV2";
import VideoTrailer from "../components/video/VideoTrailer";

const MovieDetailsPageStyles = styled.div`
  position: relative;
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
    margin-bottom: 30px;
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
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 20px;
      gap: 20px;
    }
    .rating {
      padding: 8px 15px;
      background: ${(props) => props.theme.redLight};
      border-radius: 10px;
      color: white;
    }
    .reviews {
      padding: 8px 15px;
      background: #31c6d4;
      border-radius: 10px;
      color: white;
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
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 20%;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.001) 10%,
        #0f0f0f 50%
      );
      /* backdrop-filter: blur(-1px); */
      z-index: 20;
    }
    h4 {
      font-size: 25px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    .content {
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      gap: 20px 0px;
      max-height: 500px;
      height: 100%;
      overflow-y: auto;
      position: relative;

      .card {
        display: flex;
        gap: 0px 20px;
        &:last-child {
          margin-bottom: 60px;
        }

        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
        }
        .content-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .cast_title {
            font-weight: 600;
            font-size: 16px;
          }
          .cast_add {
            color: #bebebe;
            font-size: 15px;
          }
        }
      }
    }
  }
  .swiper {
    display: flex;
    gap: 40px 0px;
    padding: 20px 0px;
  }
  .swiper-wrapper {
    user-select: none;
    width: 260px;
  }
  .similar {
    margin-bottom: 40px;
    h3 {
      font-size: 25px;
      font-weight: 550;
      margin-bottom: 40px;
      position: relative;
      padding-bottom: 10px;
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0px;
        width: 80px;
        height: 5px;
        border-radius: 10px;
        background-color: ${(props) => props.theme.redLight};
      }
    }
  }
  @media screen and (max-width: 1280px) {
    .background {
      height: 530px;
    }
    .main {
      gap: 0px 35px;
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
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 20px;
      gap: 20px;
    }
    .rating {
      padding: 8px 15px;
      background: ${(props) => props.theme.redLight};
      border-radius: 10px;
      color: white;
    }
    .reviews {
      padding: 8px 15px;
      background: #31c6d4;
      border-radius: 10px;
      color: white;
    }
  }
  }
`;
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);
  const [show, setShow] = useState(false);
  if (!data) return;
  const isLoading = !data && !error;
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
  const handleHide = (e) => {
    if (!e.target.matches("iframe")) {
      setShow(false);
    }
  };
  return (
    <MovieDetailsPageStyles>
      <div className="background">
        {isLoading && (
          <LoadingSkeleton width="100%" height="600px"></LoadingSkeleton>
        )}
        {!isLoading && (
          <>
            <img src={tmdbAPI.image(backdrop_path)} alt="background_details" />
            <div className="overlay"></div>
          </>
        )}
      </div>
      <div className="container main">
        <div className="left">
          {isLoading && (
            <LoadingSkeleton
              width="100%"
              height="350px"
              radius="16px"
            ></LoadingSkeleton>
          )}
          {!isLoading && (
            <img src={tmdbAPI.image(poster_path)} alt="poster_details" />
          )}

          <div className="left-content">
            {isLoading && (
              <>
                <LoadingSkeleton
                  width="180px"
                  height="50px"
                  radius="8px"
                ></LoadingSkeleton>
                <LoadingSkeleton
                  width="180px"
                  height="50px"
                  radius="8px"
                ></LoadingSkeleton>
              </>
            )}
            {!isLoading && (
              <>
                <span className="rating">{vote_average} ratings</span>
                <span className="reviews">{vote_count} reviews</span>
              </>
            )}
          </div>
        </div>
        <div className="center">
          {isLoading && (
            <div className="flex flex-col gap-[10px]">
              <LoadingSkeleton
                width="500px"
                height="50px"
                radius="5px"
              ></LoadingSkeleton>
              <LoadingSkeleton
                width="300px"
                height="30px"
                radius="5px"
              ></LoadingSkeleton>
              <LoadingSkeleton
                width="100px"
                height="30px"
                radius="5px"
              ></LoadingSkeleton>
              <LoadingSkeleton
                width="200px"
                height="50px"
                radius="5px"
              ></LoadingSkeleton>
              <LoadingSkeleton
                width="100%"
                height="200px"
                radius="5px"
              ></LoadingSkeleton>
              <LoadingSkeleton
                width="100%"
                height="150px"
                radius="5px"
              ></LoadingSkeleton>
            </div>
          )}
          {!isLoading && (
            <>
              <h3 className="title">{title}</h3>
              <p className="original_title">Original title: {original_title}</p>
              <div className="date">{release_date}</div>
              <div className="share">
                <Button onClick={() => setShow(true)}>Watch trailer</Button>
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
            </>
          )}
        </div>
        <div className="right">
          {isLoading && (
            <div className="flex flex-col gap-[10px]">
              <LoadingSkeleton
                width="100px"
                height="50px"
                radius="5px"
              ></LoadingSkeleton>
              <LoadingSkeleton
                width="100%"
                height="500px"
                radius="5px"
              ></LoadingSkeleton>
            </div>
          )}
          {!isLoading && (
            <>
              <h4>Cast</h4>
              <div className="content">
                <Cast></Cast>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="similar">
        <div className="container">
          <h3>Similar Movies</h3>
          <div className="similar_content">
            <Similar></Similar>
          </div>
        </div>
      </div>
      {show && (
        <VideoTrailer
          clickHandleHide={handleHide}
          clickClose={() => setShow(false)}
        ></VideoTrailer>
      )}
    </MovieDetailsPageStyles>
  );
};

const Cast = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    tmdbAPI.getMovieDetailsInfo(movieId, "credits"),
    fetcher
  );
  if (!data) return;
  const cast = data?.cast || [];
  return (
    <>
      {cast.length > 0 &&
        cast.map((item) => (
          <div className="card" key={item.id}>
            <img src={tmdbAPI.image(item.profile_path)} alt="" />
            <div className="content-right">
              <p className="cast_title">{item.name}</p>
              <span className="cast_add">as {item.character}</span>
            </div>
          </div>
        ))}
    </>
  );
};

const Similar = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    tmdbAPI.getMovieDetailsInfo(movieId, "similar"),
    fetcher
  );
  if (!data) return;
  const similar = data?.results || [];
  return (
    <>
      <Swiper
        grabCursor={"true"}
        spaceBetween={40}
        slidesPerView={"auto"}
        className="similar-swiper"
      >
        {similar.length > 0 &&
          similar.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCardV2 item={item} cate="top_rated"></MovieCardV2>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
export default MovieDetailsPage;
