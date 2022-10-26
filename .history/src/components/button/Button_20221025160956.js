import React from 'react';
import styled from 'styled-components';

const ButtonStyles =styled.button``
const Button = ({onClick = () => {}, className = ''}) => {
    return (
        <ButtonStyles onClick={onClick}>
        <span>Watch trailer</span>
               <ion-icon name="play-circle-outline"></ion-icon>
            </button>
        </ButtonStyles>
    );
};

export default Button;