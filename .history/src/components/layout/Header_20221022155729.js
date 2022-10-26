import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const HeaderStyles = styled.div``;
const Header = () => {
  return <HeaderStyles>
    <h1>Movie</h1>
    <div>
        <NavLink></NavLink>
    </div>
  </HeaderStyles>;
};

export default Header;
