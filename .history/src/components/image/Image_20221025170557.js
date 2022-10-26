import React from 'react';
import styled from 'styled-components';
import { tmdbAPI } from '../../apiConfig';

const ImageStyles = styled.img`

    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    z-index: -1;
    .overlay {
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.3);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }`
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