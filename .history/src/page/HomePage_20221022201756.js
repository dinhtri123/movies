import React from "react";
import Banner from "../components/banner/Banner";
import styled from "styled-components";

const HomePageStyles = styled.div`
  padding-bottom: 60px;
  .main-content {
    width: 100%;
    display: flex;
    gap: 0px 50px;
  }
  .trailers {
    max-width: 300px;
    width: 100%;
  }
  .title {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 30px;
  }
  .card {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
  }
  .image {
    position: absolute;
    inset: 0;
    z-index: -1;
  }
  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.2);
  }
  img {
    object-fit: cover;
  }
  .card-item {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 10px;
    overflow: hidden;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    align-items: center;
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: inherit;
      backdrop-filter: blur(3px);
      box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.1);
      z-index: -1;
    }
  }
  .item {
    display: flex;
    flex-direction: column;
    padding: 0px 5px;
    line-height: 1.3;
    &-title {
      font-weight: 500;
    }
    &-since {
      font-size: 12px;
    }
  }
  .star {
    display: flex;
    gap: 5px;
  }
  icon-star{
    
  }
`;
const HomePage = () => {
  return (
    <HomePageStyles>
      <div className="container">
        <Banner></Banner>
        <div className="main-content">
          <div className="trailers">
            <h3 className="title">New Trailers</h3>
            <div className="card">
              <div className="image">
                <div className="overlay"></div>
                <img
                  src="https://images.unsplash.com/photo-1666350773137-cbc310aaf909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </div>
              <div className="card-item">
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-9 h-9"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                </span>
                <div className="item">
                  <span className="item-title">Black Panther 2</span>
                  <span className="item-since">2017</span>
                </div>
                <div className="star">
                  <span className="number">5</span>
                  <span className="icon-star">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-6 h-6"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="content">Content</div>
        </div>
      </div>
    </HomePageStyles>
  );
};

export default HomePage;
