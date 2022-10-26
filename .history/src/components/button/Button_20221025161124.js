import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
max-width: 200px;
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
  }
  border-radius: 8px;
    font-weight: 600;
    display: inline-block;
    
`;
const Button = ({ onClick = () => {}, className = "" }) => {
  return (
    <ButtonStyles onClick={onClick} className={className}>
      <span>Watch trailer</span>
      <ion-icon name="play-circle-outline"></ion-icon>
    </ButtonStyles>
  );
};

export default Button;
