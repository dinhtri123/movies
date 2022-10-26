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
  .input-search {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  .search {
    display: flex;
    align-items: center;
    width: 90%;
    height: 55px;
    position: relative;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.32);
    backdrop-filter: blur(2px);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    input {
      width: 100%;
      height: 100%;
      background-color: transparent;
      padding: 10px 20px;
    }
    input:focus > ion-icon{
        background-colo:r: ;
    }
    ion-icon {
      font-size: 25px;
      padding-right: 20px;
      color: ${(props) => props.theme.redLight};
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
      <div className="container input-search">
        <div className="search">
          <input type="text" placeholder="Type here to search..." />
          <ion-icon name="search-outline"></ion-icon>
        </div>
      </div>
    </SearchStyles>
  );
};

export default Search;
