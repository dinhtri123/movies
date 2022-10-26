import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
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
  const {data} =useSWR
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <BannerStyles>
      <Slider>
        <div className="image">
          <div className="overlay"></div>
          <img
            src="https://vtv1.mediacdn.vn/thumb_w/650/2019/5/9/infinitywar5aabd55fed5fa0-15573929227852133990670.jpg"
            alt=""
          />
        </div>
        <h2 className="title">Avengers: Endgame</h2>
        <div className="category">
          <span className="category-item">Action</span>
          <span className="category-item">Aventure</span>
          <span className="category-item">Drama</span>
        </div>
        <button type="submit" className="button">
          Watch now
        </button>
      </Slider>
    </BannerStyles>
  );
};

export default Banner;
