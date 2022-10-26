import React from "react";
import styled from "styled-components";
const HeaderStyles = styled.div`

`;
const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <h1 className="logo">Movie</h1>
        <div className="menu">
          <li>Home</li>
          <li>Movies</li>
        </div>
        <div className="profile">
          <img
            src="https://images.unsplash.com/photo-1608889476518-738c9b1dcb40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt="avengers"
          />
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
