import React from "react";
import styled from "styled-components";

const PageNotFoundStyles = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://znews-photo.zingcdn.me/w660/Uploaded/ngogtn/2021_08_20/bOGkgRGdhrBYJSLpXaxhXVstddV.jpeg")
    no-repeat;
  background-size: cover;
`;
const PageNotFound = () => {
  return (
    <PageNotFoundStyles>
      <div className="content">
        <h2>404 page</h2>
        <span>Sorry, this page not found</span>
      </div>
    </PageNotFoundStyles>
  );
};

export default PageNotFound;
