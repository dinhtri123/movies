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
              src="https://nld.mediacdn.vn/zoom/700_438/2019/4/3/avengers-endgame-poster-og-social-crop-15542720808371479664269.jpg"
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
