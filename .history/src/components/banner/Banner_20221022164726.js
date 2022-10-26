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
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 50px;
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
        border:1px solid #eee;
        padding:10px 20px;
        border-radius: ;
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
          <h2 className="title">Avengers: Endgame</h2>
          <div className="category">
            <span className="category-item">Action</span>
            <span className="category-item">>Aventure</span>
            <span className="category-item">>Drama</span>
          </div>
          <button type="submit">Watch now</button>
        </div>
      </div>
    </BannerStyles>
  );
};

export default Banner;
