import React from "react";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import Category from "../category/Category";
const BannerStyles = styled.div`
  width: 100%;
  max-height: 500px;
  height: 500px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  margin-bottom: 40px;
  .swiper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .swiper-slide {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 40px 0px;
    padding: 40px;
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
`;
const Banner = () => {
  const navigate = useNavigate();
  const { data, error } = useSWR(tmdbAPI.getBanner("top_rated"), fetcher);
  if (!data) return;
  const banner = data?.results || [];
  const isLoading = !data && !error;
  return (
    <BannerStyles>
    {isLoading && (
      
    )}
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {banner.length > 0 &&
          banner.slice(0, 4).map((item) => (
            <SwiperSlide key={item.id}>
              <div className="image">
                <div className="overlay"></div>
                <img
                  src= {tmdbAPI.image(item.backdrop_path)}
                  alt="banner-slice"
                />
              </div>
              <h2 className="title">{item.title}</h2>
              <div className="category">
                <Category className="bg-[#2146C7]">Action</Category>
                <Category className="bg-[#31c6d4]">Aventure</Category>
                <Category className="bg-[#D58BDD]">Drama</Category>
              </div>
              <Button onClick={() => navigate(`/movie/${item.id}`)}>
                Watch now
              </Button>
            </SwiperSlide>
          ))}
      </Swiper>
    </BannerStyles>
  );
};


export default Banner;
