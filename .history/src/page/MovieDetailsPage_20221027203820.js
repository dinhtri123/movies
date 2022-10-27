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
        height: 330px;
      }
      &-content {
        margin-top: 15px;
        gap: 15px;
      }
      .rating,
      .reviews {
        padding: 7px 14px;
        border-radius: 8px;
      }
    }
    .center {
      padding-top: 35px;
      .title {
        font-size: 28px;
      }
      .date {
        font-size: 14px;
      }
      .btn {
        font-size: 16px;
        padding: 10px 15px;
        height: auto;
      }
    }
    .right {
      padding-top: 35px;
      h4 {
        font-size: 23px;
      }
      .content {
        gap: 15px 0px;
        .card {
          gap: 0px 15px;
          img {
            width: 55px;
            height: 55px;
          }
          .content-right {
            .cast_title {
              font-size: 15px;
            }
            .cast_add {
              color: #bebebe;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .background {
      height: 450px;
    }
    .main {
      gap: 0px 30px;
    }
    .left {
      img {
        height: 280px;
      }
      &-content {
        margin-top: 13px;
        gap: 13px;
      }
      .rating,
      .reviews {
        padding: 6px 12px;
        border-radius: 8px;
      }
    }
    .center {
      padding-top: 30px;
      .title {
        font-size: 25px;
      }
      .original_title {
        font-size: 13px;
      }
      .date {
        font-size: 13px;
      }
      .btn {
        font-size: 14px;
        padding: 10px 15px;
      }
      .overview {
        margin: 25px 0px;
      }
      .detail {
        h4 {
          font-size: 18px;
          margin-bottom: 15px;
        }
      }
      .info {
        gap: 15px;
        .details_title {
          font-size: 13px;
        }
        .genres_value {
          gap: 10px;
          span {
            padding: 6px 12px;
            border-radius: 5px;
            font-size: 12px;
          }
        }
        .details_value {
          font-size: 12px;
        }
      }
    }
    .right {
      padding-top: 30px;
      h4 {
        font-size: 20px;
      }
      .content {
        gap: 13px 0px;
        .card {
          gap: 0px 13px;
          img {
            width: 50px;
            height: 50px;
          }
          .content-right {
            .cast_title {
              font-size: 13px;
            }
            .cast_add {
              font-size: 12px;
            }
          }
        }
      }
    }
    .swiper {
      gap: 20px 0px;
      padding: 10px 0px;
    }
    .swiper-wrapper {
      width: 240px;
    }
    .star {
      width: 45px;
      height: 45px;
    }
    .since {
      font-size: 15px;
    }
    .btn {
      padding: 14px;
      font-size: 16px;
    }
  }
  @media screen and (max-width: 768px) {
    .background {
      height: 400px;
    }
    .main {
      display: flex;
      flex-wrap: wrap;
    }
    .left {
      flex: 100%;
      img {
        width: 220px;
        height: 280px;
        margin: 0px auto;
      }
      &-content {
        margin-top: 15px;
        gap: 15px;
      }
      .rating,
      .reviews {
        padding: 8px 14px;
        border-radius: 8px;
      }
    }
    .center {
      flex: 65%;
    }
    .right {
      flex: 25%;
    }
    .swiper-wrapper {
      width: 220px;
    }
    .star {
      width: 40px;
      height: 40px;
    }
    .card-item-second {
      .since {
        font-size: 14px;
      }
    }
    .btn {
      padding: 10px;
      font-size: 15px;
      height: auto;
    }
    .card-second {
      height: 380px;
    }
  }
  @media screen and (max-width: 568px) {
    .background {
      height: 350px;
    }
    .left {
      flex: 100%;
      img {
        width: 200px;
        height: 260px;
      }
      &-content {
        margin-top: 13px;
        gap: 13px;
      }
      .rating,
      .reviews {
        padding: 6px 12px;
        border-radius: 5px;
      }
    }
    .center {
      flex: 65%;
      .title {
        font-size: 22px;
      }
      .original_title {
        font-size: 11px;
      }
      .date {
        font-size: 11px;
      }
      .share {
        margin: 10px 0px;
      }
      .btn {
        font-size: 12px;
        padding: 8px 14px;
      }
      .overview {
        margin: 15px 0px;
      }
      .detail {
        h4 {
          font-size: 16px;
          margin-bottom: 12px;
        }
      }
      .info {
        gap: 10px;
        .details_title {
          font-size: 11px;
          margin-right: 0px;
        }
        .genres_value {
          gap: 8px;
          justify-content: flex-start;
          span {
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 10px;
          }
        }
        .details_value {
          font-size: 10px;
        }
      }
    }
    .right {
      flex: 25%;
      h4 {
        font-size: 16px;
      }
      .content {
        gap: 8px 0px;
        .card {
          gap: 0px 8px;
          img {
            width: 40px;
            height: 40px;
          }
          .content-right {
            .cast_title {
              font-size: 11px;
            }
            .cast_add {
              font-size: 11px;
            }
          }
        }
      }
    }
    .swiper-wrapper {
      width: 210px;
    }
    .star {
      width: 35px;
      height: 35px;
    }
    .card-item-second {
      .since {
        font-size: 12px;
      }
    }
    .btn {
      padding: 9px;
      font-size: 13px;
      height: auto;
      border-radius: 5px;
    }
    .card-second {
      max-height: 350px;
    }
  }
  @media screen and (max-width: 480px) {
    .background {
      height: 300px;
    }
    .left {
      flex: 100%;
      img {
        width: 180px;
        height: 230px;
      }
    }

    .right {
      .content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
      }
    }
    .swiper-wrapper {
      width: 180px;
    }
    .star {
      width: 30px;
      height: 30px;
    }
    .card-item-second {
      .since {
        font-size: 10px;
      }
    }
    .btn {
      padding: 8px;
      font-size: 12px;
      border-radius: 5px;
    }
    .card-second {
      max-height: 320px;
    }
  }
  @media screen and (max-width: 375px) {
    .similar {
      .heading {
        font-size: 14px;
      }
    }
    .swiper-wrapper {
      width: 170px;
    }
    .star {
      width: 28px;
      height: 28px;
    }
    .card-item-second {
      .since {
        font-size: 9px;
      }
    }
    .btn {
      padding: 7px;
      font-size: 11px;
      border-radius: 3px;
    }
    .card-second {
      max-height: 300px;
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
          <h3 className="heading">Similar Movies</h3>
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
