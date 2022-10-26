import React from 'react';
import styled from 'styled-components';

const ButtonStyles =styled.button
const Button = () => {
    return (
        <div>
            <button className="btn_trailer" onClick={() => setShow(true)}>
              Watch trailer <ion-icon name="play-circle-outline"></ion-icon>
            </button>
        </div>
    );
};

export default Button;