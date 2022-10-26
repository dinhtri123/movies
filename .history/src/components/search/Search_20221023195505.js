import React from "react";
import styled from "styled-components";

const SearchStyles = styled.div`
  .background {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
    .over
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
