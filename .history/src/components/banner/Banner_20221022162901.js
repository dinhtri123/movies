import React from "react";
import styled from "styled-components";
const BannerStyles = styled.div`
  width: 100%;
  max-height: 500px;
  height: 100%;
  position: relative;
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
      <div className="containe">
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
    </BannerStyles>
  );
};

export default Banner;
