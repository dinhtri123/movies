import React from 'react';
import styled from 'styled-components';

const ButtonStyles =styled.button``
const Button = ({onClick}) => {
    return (
        <ButtonStyles>
            <button className="btn_trailer" onClick={onClick}>
              Watch trailer <ion-icon name="play-circle-outline"></ion-icon>
            </button>
        </ButtonStyles>
    );
};

export default Button;