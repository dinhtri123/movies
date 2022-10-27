import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const HeaderStyles = styled.div`
  width: 100%;
  padding: 20px 0px;

  .logo {
    font-size: 30px;
    font-weight: bold;
    background: -webkit-linear-gradient(
      ${(props) => props.theme.redLight},
      ${(props) => props.theme.blueLight}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .menu {
    display: flex;
    list-style: none;
    gap: 0px 40px;
    .active {
      color: ${(props) => props.theme.redLight};
      font-weight: 600;
    }
  }
  .profile {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  @media screen and (max-width: 1024px) {
    padding: 10px 0px;
    .logo {
      font-size: 25px;
    }
    .profile {
      width: 35px;
      height: 35px;
    }
    .menu {
      gap: 0px 30px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 8px 0px;
    .logo {
      font-size: 23px;
    }
    .profile {
      width: 30px;
      height: 30px;
    }
    .menu {
      gap: 0px 25px;
    }
  }
  @media screen and (max-width: 568px) {
    padding: 5px 0px;
    .logo {
      font-size: 20px;
    }
    .profile {
      width: 25px;
      height: 25px;
    }
    .menu {
      gap: 0px 20px;
    }
  }
  @media screen and (max-width: 480px) {
    padding: 5px 0px;
    .logo {
      font-size: 18px;
    }
    .profile {
      width: 25px;
      height: 25px;
    }
    .menu {
      gap: 0px 15px;
    }
  }
  @media screen and (max-width: 375px) {
    padding: 5px 0px;
    .logo {
      font-size: 18px;
    }
    .profile {
      width: 25px;
      height: 25px;
    }
    .menu {
      gap: 0px 15px;
    }
  }
  
`;
const Header = () => {
  return (
    <HeaderStyles>
      <div className="container flex items-center justify-between">
        <NavLink to={"/"} className="logo">
          Movies
        </NavLink>
        <div className="menu">
          <NavLink to={"/"} end="true" className="nav-item">
            Home
          </NavLink>
          <NavLink to={"/movie"} end="true" className="nav-item">
            Movies
          </NavLink>
        </div>
        <div className="profile">
          <img
            src="https://images.unsplash.com/photo-1561149877-84d268ba65b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZlbmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="avengers"
          />
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
