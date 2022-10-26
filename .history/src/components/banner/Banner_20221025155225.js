import React from "react";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "../../apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";
const BannerStyles = styled.div`
  width: 100%;
  max-height: 500px;
  height: 500px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 50px;
  gap: 40px 0px;
  margin-bottom: 40px;

  .slice-banner {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .image {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    z-index: -1;
    .overlay {
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.3);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .title {
    font-size: 50px;
    font-weight: bold;
  }
  .category {
    display: flex;
    gap: 0px 15px;
    &-item {
      border: 1px solid #eee;
      padding: 10px 20px;
      border-radius: 8px;
    }
  }
  .button {
    border-radius: 8px;
    padding: 20px;
    font-size: 18px;
    background: ${(props) => props.theme.redLight};
    font-weight: 600;
    display: inline-block;
    max-width: 200px;
  }
`;
const Banner = () => {
  const { data } = useSWR(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=bee9d365514775f0a6d69d0ecb510c45",
    fetcher
  );
  if (!data) return;
  const banner = data?.results || [];

  return (
    <BannerStyles>
      {banner.length > 0 &&
        banner.slice(0, 2).map((item) => (
          <div key={item.id}>
            <div className="image">
              <div className="overlay"></div>
              <img
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                alt="banner-slice"
              />
            </div>
            <h2 className="title">{item.title}</h2>
            <div className="category">
              <span className="category-item">Action</span>
              <span className="category-item">Aventure</span>
              <span className="category-item">Drama</span>
            </div>
            <button type="submit" className="button">
              Watch now
            </button>
          </div>
        ))}
    </BannerStyles>
  );
};

export default Banner;
