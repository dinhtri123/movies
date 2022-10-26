import React from "react";
import styled from "styled-components";

const SearchStyles = styled.div`
  .background {
    width: 100%;
    height: 200px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
    .overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.1),
        rgba(0, 0, 0, 1)
      );
    }
  }
`;
const Search = () => {
  return (
    <SearchStyles>
      <div className="background">
        <img src="https://laptop88.vn/media/news/1109_kv-new1.png" alt="" />
        <div className="overlay"></div>
      </div>
    </SearchStyles>
  );
};

export default Search;
