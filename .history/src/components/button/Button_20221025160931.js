import React from 'react';
import styled from 'styled-components';

const ButtonStyles =styled.button``
const Button = ({onClick}) => {
    return (
        <ButtonStyles onClick={onClick}>
            <button className="btn_trailer" >
              Watch trailer <ion-icon name="play-circle-outline"></ion-icon>
            </button>
        </ButtonStyles>
    );
};

export default Button;