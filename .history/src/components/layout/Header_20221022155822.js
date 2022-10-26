import React from "react";
import styled from "styled-components";
const HeaderStyles = styled.div``;
const Header = () => {
  return <HeaderStyles>
    <h1>Movie</h1>
    <div>
        <li>Home</li>
        <li>Movies</li>
    </div>
  </HeaderStyles>;
};

export default Header;
