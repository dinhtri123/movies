import React from 'react';
import styled from 'styled-components';
import { tmdbAPI } from '../../apiConfig';

const ImageStyles = styled.img``
const Image = ({children = <></>, type}) => {
    return (
        <ImageStyles>
        {children}
            <img
                  src= {tmdbAPI.image(type)}
                  alt="banner-slice"
                />
        </ImageStyles>
    );
};

export default Image;