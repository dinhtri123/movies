import React from "react";
import styled from "styled-components";

const SearchStyles = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  .background {
    z-index: -1;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
    .overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), #0f0f0f);
      backdrop-filter: blur(2px);
    }
  }
  .search {
    display: flex;
    align-items: center;
    width: 90%;
    height: 60px;
    position: relative;
    background: white;

    input {
      width: 100%;
      height: 100%;
      background-color: transparent;
    }
    ion-icon {
      
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
      <div className="container">
        <div className="search">
          <input type="text" />
          <ion-icon name="search-outline"></ion-icon>
        </div>
      </div>
    </SearchStyles>
  );
};

export default Search;
