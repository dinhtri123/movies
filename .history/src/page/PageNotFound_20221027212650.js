import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const PageNotFoundStyles = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #182747;
  color: white;
  .page-content {
    height: 100%;
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    padding-top: 330px;
    text-align: center;
  }
  .image {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 350px;
    max-height: 330px;
  }
  .heading {
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 20px;
    background: -webkit-linear-gradient(
      ${(props) => props.theme.redLight},
      ${(props) => props.theme.blueLight}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .description {
    max-width: 800px;
    margin: 0 auto 40px;
  }
  .back {
    display: inline-block;
    padding: 15px 30px;
    color: white;
    background-image: linear-gradient(
      to right top,
      ${(props) => props.theme.redLight},
      ${(props) => props.theme.blueLight}
    );
    border-radius: 8px;
    font-weight: 500;
  }
`;

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <PageNotFoundStyles>
      <div className="page-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="image"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>

        <h1 className="heading">404 - Looks like you're lost.</h1>
        <p className="description">
          Maybe this page used to exist or you just spelled something wrong.
          Chances are your spelled something wrong, so can you double check the
          URL?
        </p>
        <button onClick={() => navigate("/")} className="back">
          Go home
        </button>
      </div>
    </PageNotFoundStyles>
  );
};

export default PageNotFound;
