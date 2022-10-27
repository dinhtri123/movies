import React from "react";
import styled from "styled-components";

const PageNotFoundStyles = styled.div`
  width: 100%;
  height: 100vh;
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      font-size: 10rem;
      font-weight: bold;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
const PageNotFound = () => {
  return (
    <PageNotFoundStyles>
      <div className="content">
        <h2>404</h2>
        <span>Sorry, this page not found</span>
        <button>Go Home</button>
      </div>
    </PageNotFoundStyles>
  );
};

export default PageNotFound;
