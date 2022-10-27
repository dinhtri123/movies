import React, { useEffect } from "react";
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
    padding-top:330px
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
  useEffect(() => {
    document.title = "404 Not Found";
  }, []);
  const navigate = useNavigate();
  return (
    <PageNotFoundStyles>
      <div className="page-content">
        <img src="/error.png" alt="notfound" className="image" />
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
