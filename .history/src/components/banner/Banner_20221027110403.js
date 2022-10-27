import React from "react";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import Category from "../category/Category";
import LoadingSkeleton from "../loading/LoadingSkeleton";
const BannerStyles = styled.div`
  width: 100%;
  max-height: 500px;
  height: 500px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  margin-bottom: 40px;
  display: block;
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
  }
  @media screen and (max-width: 1024px) {
    max-height: 400px;
    .btn {
      padding: 14px;
      font-size: 16px;
      max-width: 160px;
    }
    .swiper-slide {
      gap: 25px 0px;
    }
    .title {
      font-size: 40px;
    }
    .category {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    max-height: 320px;
    .btn {
      padding: 12px;
      font-size: 14px;
      max-width: 120px;
    }
    .swiper-slide {
      gap: 25px 0px;
      padding: 20px;
    }
    .title {
      font-size: 35px;
    }
    .category {
      font-size: 12px;
      .item {
        padding: 6px 12px;
      }
    }
  }
  @media screen and (max-width: 568px) {
    max-height: 250px;
    .btn {
      padding: 8px;
      font-size: 12px;
      max-width: 100px;
      border-radius: 5px;
    }
    .swiper-slide {
      gap: 15px 0px;
      padding: 15px;
    }
    .title {
      font-size: 30px;
    }
    .category {
      font-size: 10px;
      .item {
        padding: 5px 10px;
        border-radius: 5px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    max-height: 200px;
    .btn {
      padding: 6px;
      font-size: 9px;
      max-width: 80px;
    }
    .swiper-slide {
      gap: 10px 0px;
      padding: 15px;
    }
    .title {
      font-size: 22px;
    }
    .category {
      font-size: 8px;
      .item {
        padding: 4px 8px;
        border-radius: 5px;
      }
    }
  }
`;
const Banner = () => {
  const navigate = useNavigate();
  const { data, error } = useSWR(tmdbAPI.getMovies("top_rated"), fetcher);
  const isLoading = !data & !error;
  const banner = data?.results || [];
  return (
    <>
      <div className="container">
        <BannerStyles>
          {isLoading ? (
            <LoadingSkeleton className="w-full h-full rounded-[10px]"></LoadingSkeleton>
          ) : (
            ""
          )}
          {!isLoading && (
            <Swiper
              grabCursor={"true"}
              spaceBetween={40}
              slidesPerView={"auto"}
            >
              {banner.length > 0 &&
                banner.slice(0, 4).map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="image">
                      <div className="overlay"></div>
                      <img
                        src={tmdbAPI.image(item.backdrop_path)}
                        alt="banner-slice"
                      />
                    </div>
                    <h2 className="title">{item.title}</h2>
                    <div className="category">
                      <Category className="bg-[#2146C7] item">Action</Category>
                      <Category className="bg-[#31c6d4] item">
                        Aventure
                      </Category>
                      <Category className="bg-[#D58BDD] item">Drama</Category>
                    </div>
                    <Button
                      onClick={() => navigate(`/movie/${item.id}`)}
                      className="w-[200px] btn"
                    >
                      Watch now
                    </Button>
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </BannerStyles>
      </div>
    </>
  );
};

export default Banner;
