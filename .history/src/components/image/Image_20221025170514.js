import React from 'react';
import styled from 'styled-components';
import { tmdbAPI } from '../../apiConfig';

const ImageStyles = styled.img``
const Image = ({children = <></>, type, alt=''}) => {
    return (
        <ImageStyles>
        {children}
            <img
                  src= {tmdbAPI.image(type)}
                  alt={alt}
                />
        </ImageStyles>
    );
};

export default Image;