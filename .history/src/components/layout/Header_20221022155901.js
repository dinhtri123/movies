import React from "react";
import styled from "styled-components";
const HeaderStyles = styled.div``;
const Header = () => {
  return (
    <HeaderStyles>
      <h1 className="logo">Movie</h1>
      <div className="menu">
        <li>Home</li>
        <li>Movies</li>
      </div>
      <div className="profile">
        
      </div>
    </HeaderStyles>
  );
};

export default Header;
