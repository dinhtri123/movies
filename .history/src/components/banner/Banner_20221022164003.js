import React from "react";
import styled from "styled-components";
const BannerStyles = styled.div`
  width: 100%;
  max-height: 500px;
  height: 500px;
  .banner-main {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
  }
  .image {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    .overlay {
      position: absolute;
      inset: 0;
      background-image: linear-gradient(
        0deg,
        rgba(17, 17, 17, 0.1) 0%,
        rgba(252, 252, 255, 0.34) 100%
      );
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
const Banner = () => {
  return (
    <BannerStyles>
      <div className="container">
        <div className="banner-main">
          <div className="image">
            <div className="overlay"></div>
            <img
              src="https://vtv1.mediacdn.vn/thumb_w/650/2019/5/9/infinitywar5aabd55fed5fa0-15573929227852133990670.jpg"
              alt=""
            />
          </div>
          <h2>Avengers: Endgame</h2>
          <div className="category">
            <span>Action</span>
            <span>Aventure</span>
            <span>Drama</span>
          </div>
          <button type="submit">Watch now</button>
        </div>
      </div>
    </BannerStyles>
  );
};

export default Banner;
