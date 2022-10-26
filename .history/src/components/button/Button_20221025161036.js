import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
padding: 15px 30px;
      background: ${(props) => props.theme.redLight};
      font-weight: 500;
      border-radius: 30px;
      display: flex;
      align-items: center;
      font-size: 18px;
      ion-icon {
        font-size: 25px;
        margin-left: 10px;
      }`;
const Button = ({ onClick = () => {}, className = "" }) => {
  return (
    <ButtonStyles onClick={onClick}>
      <span>Watch trailer</span>
      <ion-icon name="play-circle-outline"></ion-icon>
    </ButtonStyles>
  );
};

export default Button;
