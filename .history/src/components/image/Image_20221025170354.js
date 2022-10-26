import React from 'react';
import styled from 'styled-components';
import { tmdbAPI } from '../../apiConfig';

const ImageStyles = styled.img``
const Image = () => {
    return (
        <ImageStyles>
        {children}
            <img
                  src= {tmdbAPI.image(item.backdrop_path)}
                  alt="banner-slice"
                />
        </ImageStyles>
    );
};

export default Image;